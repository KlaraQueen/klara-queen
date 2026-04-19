import React, { useState, useEffect, useCallback } from "react";
import * as S from "./styled";
import InvoiceTable from "./InvoiceTable";
import InvoiceDetails from "./InvoiceDetails";
import Toast from "../Toast";
import { fetchInvoices } from "../../../services/invoiceService";

const STATUS_FILTERS = ["wszystkie", "do wystawienia", "wystawiona"];

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewing, setViewing] = useState(null);
  const [filter, setFilter] = useState("wszystkie");
  const [toast, setToast] = useState(null);

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
        />
        <Toast message={toast?.msg} error={toast?.error} />
      </S.Section>
    );
  }

  return (
    <S.Section>
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
