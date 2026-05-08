import React, { useState, useRef, useEffect } from "react";
import * as S from "./styled";
import {
  getNextInvoiceNumber,
  updateInvoice,
} from "../../../../services/invoiceService";
import {
  coerceFirestoreDate,
  dateToIsoLocal,
  localDateToFirestoreTimestamp,
} from "../../../../utils/firestoreDates";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const STATUSES = ["do wystawienia", "wystawiona"];

export default function InvoiceDetails({
  invoice,
  onBack,
  onUpdate,
  onSilentRefresh,
}) {
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [numberInput, setNumberInput] = useState(() => invoice.number || "");
  const [issuedDateStr, setIssuedDateStr] = useState(() =>
    dateToIsoLocal(
      coerceFirestoreDate(invoice.issuedAt) ??
        coerceFirestoreDate(invoice.createdAt) ??
        new Date(),
    ),
  );
  const fileRef = useRef(null);

  useEffect(() => {
    setNumberInput(invoice.number || "");
  }, [invoice.id, invoice.number]);

  useEffect(() => {
    const d =
      coerceFirestoreDate(invoice.issuedAt) ??
      coerceFirestoreDate(invoice.createdAt) ??
      new Date();
    setIssuedDateStr(dateToIsoLocal(d));
  }, [invoice.id, invoice.issuedAt, invoice.createdAt]);

  const displayTitle = invoice.number
    ? `Faktura ${invoice.number}`
    : "Faktura (numer do uzupełnienia)";

  const handleStatus = async (e) => {
    const newStatus = e.target.value;
    setSaving(true);
    try {
      const patch = { status: newStatus };
      if (newStatus === "wystawiona") {
        patch.issuedAt = localDateToFirestoreTimestamp(issuedDateStr);
      }
      await updateInvoice(invoice.id, patch);
      onUpdate();
    } catch {
      setSaving(false);
    }
  };

  const handleSaveNumber = async () => {
    const trimmed = numberInput.trim();
    setSaving(true);
    try {
      await updateInvoice(invoice.id, {
        number: trimmed,
      });
      await onSilentRefresh?.(invoice.id);
    } catch {
      setSaving(false);
    }
    setSaving(false);
  };

  const handleSaveDate = async () => {
    setSaving(true);
    try {
      await updateInvoice(invoice.id, {
        issuedAt: localDateToFirestoreTimestamp(issuedDateStr),
      });
      await onSilentRefresh?.(invoice.id);
    } catch {
      setSaving(false);
    }
    setSaving(false);
  };

  const handleMarkIssued = async () => {
    setSaving(true);
    try {
      let num = numberInput.trim();
      if (!num) {
        num = await getNextInvoiceNumber();
        setNumberInput(num);
      }
      await updateInvoice(invoice.id, {
        status: "wystawiona",
        issuedAt: localDateToFirestoreTimestamp(issuedDateStr),
        number: num,
      });
      onUpdate();
    } catch {
      setSaving(false);
    }
  };

  const handleUploadPdf = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !storage) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `invoices/${invoice.id}.pdf`);
      await uploadBytes(storageRef, file);
      const pdfUrl = await getDownloadURL(storageRef);
      await updateInvoice(invoice.id, { pdfUrl });
      if (onSilentRefresh) {
        await onSilentRefresh(invoice.id);
      } else {
        onUpdate();
      }
    } catch {
      setUploading(false);
    }
    setUploading(false);
    e.target.value = "";
  };

  const rawNumber = invoice.number || "";
  const numberDirty =
    numberInput.trim() !== (typeof rawNumber === "string" ? rawNumber.trim() : "");

  const dateBaselineIso = dateToIsoLocal(
    coerceFirestoreDate(invoice.issuedAt) ??
      coerceFirestoreDate(invoice.createdAt) ??
      new Date(),
  );
  const dateDirty = issuedDateStr !== dateBaselineIso;

  return (
    <S.Panel>
      <S.Header>
        <S.Title>{displayTitle}</S.Title>
        <S.BackBtn onClick={onBack}>← Wróć</S.BackBtn>
      </S.Header>

      <S.Field>
        <S.Label>Numer faktury</S.Label>
        <S.NumRow>
          <S.NumInput
            type="text"
            placeholder="Np. jak w Fakturowni albo automat po »Wystaw fakturę«"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
          <S.SaveNumBtn
            type="button"
            onClick={handleSaveNumber}
            disabled={saving || !numberDirty}
          >
            {saving ? "Zapisywanie…" : "Zapisz numer"}
          </S.SaveNumBtn>
        </S.NumRow>
        <S.NumHint>
          Pusty + „Wystaw fakturę” ustawi kolejny numer w formacie FV/Rok/Miesiąc/nr
          (np. FV/2026/05/0003). Możesz też wpisać własny numer i zapisać.
        </S.NumHint>
      </S.Field>

      <S.Field style={{ marginTop: 16 }}>
        <S.Label>Data wystawienia</S.Label>
        <S.NumRow>
          <S.DatePick
            type="date"
            value={issuedDateStr}
            onChange={(e) => setIssuedDateStr(e.target.value)}
          />
          <S.SaveNumBtn
            type="button"
            onClick={handleSaveDate}
            disabled={saving || !dateDirty}
          >
            Zapisz datę
          </S.SaveNumBtn>
        </S.NumRow>
        <S.NumHint>
          Używana na koncie klienta; przy ustawieniu statusu „wystawiona” lub
          „Wystaw fakturę” zapisuje się ta sama data — możesz ją tu zmienić (np.
          data z Fakturowni).
        </S.NumHint>
      </S.Field>

      <S.Grid>
        <S.Field>
          <S.Label>Klient</S.Label>
          <S.Value>{invoice.customerName || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Email</S.Label>
          <S.Value>{invoice.customerEmail || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Firma</S.Label>
          <S.Value>{invoice.companyName || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>NIP</S.Label>
          <S.Value>{invoice.nip || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Adres</S.Label>
          <S.Value>
            {[invoice.street, invoice.postalCode, invoice.city]
              .filter(Boolean)
              .join(", ") || "—"}
          </S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Kwota</S.Label>
          <S.Value>{invoice.totalAmount || "—"}</S.Value>
        </S.Field>
      </S.Grid>

      <S.SectionTitle>Zamówienie</S.SectionTitle>
      <S.Grid>
        <S.Field>
          <S.Label>ID zamówienia</S.Label>
          <S.Value>{invoice.orderId?.slice(0, 8) || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Oferta</S.Label>
          <S.Value>{invoice.offerTitle || "—"}</S.Value>
        </S.Field>
      </S.Grid>

      <S.Field style={{ marginTop: 20 }}>
        <S.Label>Zmień status</S.Label>
        <S.StatusSelect
          value={invoice.status || "do wystawienia"}
          onChange={handleStatus}
          disabled={saving}
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </S.StatusSelect>
      </S.Field>

      {(invoice.status || "do wystawienia") === "do wystawienia" && (
        <S.MarkBtn onClick={handleMarkIssued} disabled={saving}>
          {saving ? "Zapisywanie…" : "Wystaw fakturę"}
        </S.MarkBtn>
      )}

      <S.SectionTitle>Plik PDF</S.SectionTitle>
      {invoice.pdfUrl ? (
        <S.PdfRow>
          <S.PdfLink
            href={invoice.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pobierz PDF
          </S.PdfLink>
          <S.UploadBtn
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? "Wysyłanie…" : "Zmień plik"}
          </S.UploadBtn>
        </S.PdfRow>
      ) : (
        <S.UploadBtn
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Wysyłanie…" : "Wgraj PDF z Fakturowni"}
        </S.UploadBtn>
      )}
      <input
        ref={fileRef}
        type="file"
        accept=".pdf"
        style={{ display: "none" }}
        onChange={handleUploadPdf}
      />
    </S.Panel>
  );
}
