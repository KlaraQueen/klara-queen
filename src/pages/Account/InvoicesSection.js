import React from "react";
import { coerceFirestoreDate } from "../../utils/firestoreDates";
import * as S from "./styled";

function formatInvoiceDate(inv) {
  const d =
    coerceFirestoreDate(inv.issuedAt) ??
    coerceFirestoreDate(inv.createdAt);
  if (!d) {
    return "—";
  }
  return d.toLocaleDateString("pl-PL");
}

function InvoicesSection({ invoices, loading }) {
  if (loading) {
    return (
      <>
        <S.PanelTitle>Faktury</S.PanelTitle>
        <S.PanelDesc>Ładowanie listy faktur…</S.PanelDesc>
      </>
    );
  }

  if (!invoices.length) {
    return (
      <>
        <S.PanelTitle>Faktury</S.PanelTitle>
        <S.PanelDesc>
          Wystawione faktury VAT — dokumenty można tu dodawać automatycznie z
          backendu lub ręcznie z panelu administracyjnego (Firestore).
        </S.PanelDesc>
        <S.EmptyState>
          <S.EmptyIcon>📄</S.EmptyIcon>
          <S.EmptyTitle>Brak faktur</S.EmptyTitle>
          <S.EmptyText>
            Nie masz jeszcze wystawionych faktur powiązanych z tym kontem.
          </S.EmptyText>
        </S.EmptyState>
      </>
    );
  }

  return (
    <>
      <S.PanelTitle>Faktury</S.PanelTitle>
      <S.PanelDesc>Twoje faktury i linki do plików PDF (jeśli dodane).</S.PanelDesc>
      <S.TableWrap>
        <S.Table>
          <thead>
            <tr>
              <th>Numer</th>
              <th>Data</th>
              <th>Kwota</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => {
              const amt = inv.amount ?? inv.totalAmount;
              return (
                <tr key={inv.id}>
                  <td>{inv.number || "—"}</td>
                  <td>{formatInvoiceDate(inv)}</td>
                  <td>
                    {amt != null && amt !== ""
                      ? `${amt} ${inv.currency || "PLN"}`
                      : "—"}
                  </td>
                  <td>
                    {inv.pdfUrl ? (
                      <a
                        href={inv.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--gold, #f1d592)" }}
                      >
                        Pobierz
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableWrap>
    </>
  );
}

export default InvoicesSection;
