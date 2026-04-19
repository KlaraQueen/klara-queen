import React from "react";
import * as S from "./styled";
import { updateOrder } from "../../../../services/orderService";

const STATUSES = ["nowe", "opłacone", "w realizacji", "zakończone", "anulowane"];

export default function OrderDetails({ order, onBack, onUpdate }) {
  const handleStatus = async (e) => {
    const newStatus = e.target.value;
    await updateOrder(order.id, { status: newStatus });
    onUpdate();
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
