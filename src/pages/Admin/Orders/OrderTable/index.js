import React from "react";
import * as S from "./styled";

export default function OrderTable({ orders, onView }) {
  if (!orders.length) {
    return <S.Empty>Brak zamówień</S.Empty>;
  }

  return (
    <S.Table>
      <S.Head>
        <tr>
          <S.HeadCell>Data</S.HeadCell>
          <S.HeadCell>Klient</S.HeadCell>
          <S.HeadCell>Oferta</S.HeadCell>
          <S.HeadCell>Kwota</S.HeadCell>
          <S.HeadCell>Status</S.HeadCell>
          <S.HeadCell>Faktura</S.HeadCell>
          <S.HeadCell />
        </tr>
      </S.Head>
      <tbody>
        {orders.map((o) => (
          <S.Row key={o.id}>
            <S.Cell>
              {o.createdAt?.toDate
                ? o.createdAt.toDate().toLocaleDateString("pl-PL")
                : "—"}
            </S.Cell>
            <S.Cell>{o.customerName || o.customerEmail || "—"}</S.Cell>
            <S.Cell>{o.offerTitle || "—"}</S.Cell>
            <S.Cell>{o.price || "—"}</S.Cell>
            <S.Cell>
              <S.Status $status={o.status}>{o.status || "nowe"}</S.Status>
            </S.Cell>
            <S.Cell>{o.wantInvoice ? "Tak" : "Nie"}</S.Cell>
            <S.Cell>
              <S.Actions>
                <S.ViewBtn onClick={() => onView(o)}>Szczegóły</S.ViewBtn>
              </S.Actions>
            </S.Cell>
          </S.Row>
        ))}
      </tbody>
    </S.Table>
  );
}
