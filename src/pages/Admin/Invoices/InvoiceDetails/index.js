import React, { useState, useRef } from "react";
import * as S from "./styled";
import { updateInvoice } from "../../../../services/invoiceService";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const STATUSES = ["do wystawienia", "wystawiona"];

export default function InvoiceDetails({ invoice, onBack, onUpdate }) {
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef(null);

  const handleStatus = async (e) => {
    const newStatus = e.target.value;
    setSaving(true);
    try {
      await updateInvoice(invoice.id, { status: newStatus });
      onUpdate();
    } catch {
      setSaving(false);
    }
  };

  const handleMarkIssued = async () => {
    setSaving(true);
    try {
      const now = new Date();
      await updateInvoice(invoice.id, {
        status: "wystawiona",
        issuedAt: now,
        number:
          invoice.number ||
          `FV/${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${invoice.id.slice(0, 6).toUpperCase()}`,
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
      onUpdate();
    } catch {
      setUploading(false);
    }
  };

  return (
    <S.Panel>
      <S.Header>
        <S.Title>
          Faktura {invoice.number || `#${invoice.id.slice(0, 8)}`}
        </S.Title>
        <S.BackBtn onClick={onBack}>← Wróć</S.BackBtn>
      </S.Header>

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

      {invoice.issuedAt && (
        <S.Field style={{ marginTop: 16 }}>
          <S.Label>Data wystawienia</S.Label>
          <S.Value>
            {invoice.issuedAt?.toDate
              ? invoice.issuedAt.toDate().toLocaleString("pl-PL")
              : new Date(invoice.issuedAt).toLocaleString("pl-PL")}
          </S.Value>
        </S.Field>
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
