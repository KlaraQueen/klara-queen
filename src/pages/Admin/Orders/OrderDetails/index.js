import React, { useState } from "react";
import * as S from "./styled";
import { updateOrder } from "../../../../services/orderService";
import { createInvoice } from "../../../../services/invoiceService";

const STATUSES = [
  "nowe",
  "nieopłacone",
  "opłacone",
  "w realizacji",
  "zrealizowane",
  "czeka na zwrot",
  "anulowane",
];

export default function OrderDetails({ order, onBack, onUpdate }) {
  const [generating, setGenerating] = useState(false);

  const handleStatus = async (e) => {
    const newStatus = e.target.value;
    const patch = { status: newStatus };
    if (newStatus === "opłacone" || newStatus === "zrealizowane") {
      patch.paymentStatus = "paid";
    } else if (newStatus === "nieopłacone" || newStatus === "anulowane") {
      patch.paymentStatus = "failed";
    } else if (newStatus === "nowe") {
      patch.paymentStatus = "pending";
    }
    await updateOrder(order.id, patch);
    onUpdate();
  };

  const handleGenerateInvoice = async () => {
    setGenerating(true);
    try {
      const emailNorm = (order.customerEmail || "").trim().toLowerCase();
      const invoiceId = await createInvoice({
        orderId: order.id,
        ...(order.userId && order.userId !== "guest"
          ? { userId: order.userId }
          : {}),
        customerName: order.customerName || "",
        customerEmail: emailNorm,
        companyName: order.invoiceCompany || "",
        nip: order.invoiceNip || "",
        street: order.invoiceStreet || "",
        postalCode: order.invoicePostalCode || "",
        city: order.invoiceCity || "",
        offerTitle: order.offerTitle || "",
        totalAmount: order.price || "",
        status: "do wystawienia",
      });
      await updateOrder(order.id, { invoiceId });
      onUpdate();
    } catch {
      setGenerating(false);
    }
  };

  return (
    <S.Panel>
      <S.Header>
        <S.Title>Zamówienie #{order.id.slice(0, 8)}</S.Title>
        <S.BackBtn onClick={onBack}>← Wróć</S.BackBtn>
      </S.Header>

      <S.Grid>
        <S.Field>
          <S.Label>Klient</S.Label>
          <S.Value>{order.customerName || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Email</S.Label>
          <S.Value>{order.customerEmail || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Telefon</S.Label>
          <S.Value>{order.customerPhone || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Płatność</S.Label>
          <S.Value>
            {order.paymentProvider === "blik" || order.paymentType === "blik"
              ? "BLIK"
              : "Kup teraz"}
          </S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Oferta</S.Label>
          <S.Value>{order.offerTitle || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Kwota</S.Label>
          <S.Value>{order.price || "—"}</S.Value>
        </S.Field>
        <S.Field>
          <S.Label>Data</S.Label>
          <S.Value>
            {order.createdAt?.toDate
              ? order.createdAt.toDate().toLocaleString("pl-PL")
              : "—"}
          </S.Value>
        </S.Field>
      </S.Grid>

      <S.Field>
        <S.Label>Zmień status</S.Label>
        <S.StatusSelect value={order.status || "nowe"} onChange={handleStatus}>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </S.StatusSelect>
      </S.Field>

      {order.wantInvoice && (
        <S.InvoiceSection>
          <S.SectionTitle>Dane do faktury</S.SectionTitle>
          <S.Grid>
            <S.Field>
              <S.Label>Firma</S.Label>
              <S.Value>{order.invoiceCompany || "—"}</S.Value>
            </S.Field>
            <S.Field>
              <S.Label>NIP</S.Label>
              <S.Value>{order.invoiceNip || "—"}</S.Value>
            </S.Field>
            <S.Field>
              <S.Label>Adres</S.Label>
              <S.Value>{order.invoiceAddress || "—"}</S.Value>
            </S.Field>
          </S.Grid>

          {!order.invoiceId && (
            <S.GenerateBtn
              onClick={handleGenerateInvoice}
              disabled={generating}
            >
              {generating ? "Generowanie…" : "Wystaw fakturę"}
            </S.GenerateBtn>
          )}

          {order.invoiceId && (
            <S.InvoiceInfo>
              Faktura utworzona (ID: {order.invoiceId.slice(0, 8)})
            </S.InvoiceInfo>
          )}
        </S.InvoiceSection>
      )}

      {order.notes && (
        <>
          <S.SectionTitle style={{ marginTop: 20 }}>
            Uwagi klienta
          </S.SectionTitle>
          <S.Value>{order.notes}</S.Value>
        </>
      )}
    </S.Panel>
  );
}
