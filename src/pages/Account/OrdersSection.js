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

function OrdersSection({ orders, loading }) {
  if (loading) {
    return (
      <>
        <S.PanelTitle>Zakupy</S.PanelTitle>
        <S.PanelDesc>Ładowanie listy zamówień…</S.PanelDesc>
      </>
    );
  }

  if (!orders.length) {
    return (
      <>
        <S.PanelTitle>Zakupy</S.PanelTitle>
        <S.PanelDesc>
          Tutaj pojawią się Twoje zamówienia i płatności — dane można później
          podłączyć (np. Stripe, sklep, panel admina zapisujący do Firestore).
        </S.PanelDesc>
        <S.EmptyState>
          <S.EmptyIcon>🛒</S.EmptyIcon>
          <S.EmptyTitle>Brak zamówień</S.EmptyTitle>
          <S.EmptyText>
            Gdy złożysz pierwsze zamówienie, zobaczysz je na tej liście.
          </S.EmptyText>
        </S.EmptyState>
      </>
    );
  }

  return (
    <>
      <S.PanelTitle>Zakupy</S.PanelTitle>
      <S.PanelDesc>Historia Twoich zamówień.</S.PanelDesc>
      <S.TableWrap>
        <S.Table>
          <thead>
            <tr>
              <th>Numer</th>
              <th>Data</th>
              <th>Produkt</th>
              <th>Kwota</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.orderNumber || o.id}</td>
                <td>{formatDate(o.createdAt)}</td>
                <td>{o.title || o.productName || "—"}</td>
                <td>{o.amount != null ? `${o.amount} ${o.currency || "PLN"}` : "—"}</td>
                <td>{o.status || "—"}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrap>
    </>
  );
}

export default OrdersSection;
