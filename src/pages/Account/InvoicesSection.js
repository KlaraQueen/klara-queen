import React from "react";
import * as S from "./styled";

function formatDate(v) {
  if (!v) {
    return "—";
  }
  const sec = v.seconds ?? v;
  if (typeof sec === "number") {
    return new Date(sec * 1000).toLocaleDateString("pl-PL");
  }
  try {
    return new Date(v).toLocaleDateString("pl-PL");
  } catch {
    return "—";
  }
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
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.number || inv.id}</td>
                <td>{formatDate(inv.issuedAt)}</td>
                <td>
                  {inv.amount != null
                    ? `${inv.amount} ${inv.currency || "PLN"}`
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
            ))}
          </tbody>
        </S.Table>
      </S.TableWrap>
    </>
  );
}

export default InvoicesSection;
