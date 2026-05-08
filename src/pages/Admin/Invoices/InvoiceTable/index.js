import React from "react";
import { coerceFirestoreDate } from "../../../../utils/firestoreDates";
import * as S from "./styled";

function invoiceTableDate(inv) {
  const d =
    coerceFirestoreDate(inv.issuedAt) ??
    coerceFirestoreDate(inv.createdAt);
  return d ? d.toLocaleDateString("pl-PL") : "—";
}

export default function InvoiceTable({ invoices, onView }) {
  if (!invoices.length) {
    return <S.Empty>Brak faktur</S.Empty>;
  }

  return (
    <S.Table>
      <S.Head>
        <tr>
          <S.HeadCell>Nr faktury</S.HeadCell>
          <S.HeadCell>Data</S.HeadCell>
          <S.HeadCell>Klient</S.HeadCell>
          <S.HeadCell>Firma</S.HeadCell>
          <S.HeadCell>Kwota</S.HeadCell>
          <S.HeadCell>Status</S.HeadCell>
          <S.HeadCell />
        </tr>
      </S.Head>
      <tbody>
        {invoices.map((inv) => (
          <S.Row key={inv.id}>
            <S.Cell>{inv.number || "—"}</S.Cell>
            <S.Cell>{invoiceTableDate(inv)}</S.Cell>
            <S.Cell>{inv.customerName || inv.customerEmail || "—"}</S.Cell>
            <S.Cell>{inv.companyName || "—"}</S.Cell>
            <S.Cell>{inv.totalAmount || "—"}</S.Cell>
            <S.Cell>
              <S.Status $status={inv.status}>
                {inv.status || "do wystawienia"}
              </S.Status>
            </S.Cell>
            <S.Cell>
              <S.Actions>
                <S.ViewBtn onClick={() => onView(inv)}>Szczegóły</S.ViewBtn>
              </S.Actions>
            </S.Cell>
          </S.Row>
        ))}
      </tbody>
    </S.Table>
  );
}
