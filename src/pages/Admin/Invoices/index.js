import React, { useState, useEffect, useCallback } from "react";
import * as S from "./styled";
import InvoiceTable from "./InvoiceTable";
import InvoiceDetails from "./InvoiceDetails";
import Toast from "../Toast";
import {
  fetchInvoices,
  normalizeAllInvoiceCustomerEmails,
  fetchInvoice,
} from "../../../services/invoiceService";

const STATUS_FILTERS = ["wszystkie", "do wystawienia", "wystawiona"];

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewing, setViewing] = useState(null);
  const [filter, setFilter] = useState("wszystkie");
  const [toast, setToast] = useState(null);
  const [normalizing, setNormalizing] = useState(false);

  const showToast = (msg, error = false) => {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchInvoices();
      setInvoices(data);
    } catch (err) {
      showToast("Błąd ładowania faktur: " + err.message, true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleBack = () => setViewing(null);

  const handleUpdate = () => {
    showToast("Faktura zaktualizowana");
    load();
    setViewing(null);
  };

  const handleSilentInvoiceRefresh = async (invoiceId) => {
    await load();
    const fresh = await fetchInvoice(invoiceId);
    setViewing((prev) =>
      prev && fresh && prev.id === invoiceId ? fresh : prev,
    );
  };

  const handleNormalizeEmails = async () => {
    if (
      !window.confirm(
        "Ujednolicić pole customerEmail we wszystkich fakturach (trim + małe litery), tam gdzie obecna wartość się różni? Operacja jest możliwa do cofnięcia tylko ręcznie w Firestore.",
      )
    ) {
      return;
    }
    setNormalizing(true);
    try {
      const { updated, skipped } = await normalizeAllInvoiceCustomerEmails();
      showToast(
        `Zaktualizowano ${updated} faktur. Bez zmian: ${skipped} (brak e-maila lub już ujednolicone).`,
      );
      await load();
    } catch (err) {
      showToast("Błąd migracji: " + err.message, true);
    }
    setNormalizing(false);
  };

  const filtered =
    filter === "wszystkie"
      ? invoices
      : invoices.filter((inv) => (inv.status || "do wystawienia") === filter);

  if (viewing) {
    return (
      <S.Section>
        <InvoiceDetails
          invoice={viewing}
          onBack={handleBack}
          onUpdate={handleUpdate}
          onSilentRefresh={handleSilentInvoiceRefresh}
        />
        <Toast message={toast?.msg} error={toast?.error} />
      </S.Section>
    );
  }

  return (
    <S.Section>
      <S.MaintenanceRow>
        <span>
          Dane historyczne: złą wielkość liter w e-mailu może blokować widok
          faktur u klienta.
        </span>
        <S.MigrateBtn
          type="button"
          onClick={handleNormalizeEmails}
          disabled={loading || normalizing}
        >
          {normalizing ? "Aktualizacja…" : "Ujednolicaj e-maile w fakturach"}
        </S.MigrateBtn>
      </S.MaintenanceRow>
      <S.Filters>
        {STATUS_FILTERS.map((s) => (
          <S.FilterBtn
            key={s}
            $active={filter === s}
            onClick={() => setFilter(s)}
          >
            {s}
            {s !== "wszystkie" &&
              ` (${
                invoices.filter((inv) => (inv.status || "do wystawienia") === s)
                  .length
              })`}
          </S.FilterBtn>
        ))}
      </S.Filters>

      {loading ? (
        <S.Spinner>Ładowanie faktur…</S.Spinner>
      ) : (
        <S.TableWrap>
          <InvoiceTable invoices={filtered} onView={setViewing} />
        </S.TableWrap>
      )}
      <Toast message={toast?.msg} error={toast?.error} />
    </S.Section>
  );
}
