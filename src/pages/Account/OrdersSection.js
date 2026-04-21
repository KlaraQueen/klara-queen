import React, { useState } from "react";
import * as S from "./styled";
import { updateOrder } from "../../services/orderService";

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

function getPaymentTypeLabel(order) {
  if (order.paymentType === "subscription") {
    return "Subskrypcja";
  }
  if (order.paymentType === "one_time") {
    return "Jednorazowy";
  }
  return "Jednorazowy";
}

function getPaymentStatus(order) {
  const status = (order.paymentStatus || "").toLowerCase();
  if (status === "paid") {
    return { label: "Opłacone", tone: "success" };
  }
  if (status === "pending") {
    return { label: "Oczekuje", tone: "warning" };
  }
  if (status === "failed" || status === "canceled" || status === "refunded") {
    return { label: "Nieopłacone", tone: "danger" };
  }

  const orderStatus = (order.status || "").toLowerCase();
  if (orderStatus === "opłacone" || orderStatus === "zrealizowane") {
    return { label: "Opłacone", tone: "success" };
  }
  if (orderStatus === "nieopłacone" || orderStatus === "anulowane") {
    return { label: "Nieopłacone", tone: "danger" };
  }
  return { label: "Oczekuje", tone: "warning" };
}

function OrdersSection({ orders, loading }) {
  const [busyId, setBusyId] = useState("");
  const hasAnySubscription = orders.some(
    (o) => o.paymentType === "subscription",
  );

  const handleCancelSubscription = async (order) => {
    if (!order?.id || busyId) {
      return;
    }
    setBusyId(order.id);
    try {
      await updateOrder(order.id, {
        cancellationRequested: true,
        cancellationRequestedAt: new Date().toISOString(),
        subscriptionStatus: "cancel_requested",
      });
    } catch {
      alert("Nie udało się wysłać prośby o anulowanie subskrypcji.");
    } finally {
      setBusyId("");
    }
  };

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
              <th>Typ</th>
              <th>Kwota</th>
              <th>Płatność</th>
              {hasAnySubscription ? <th>Opcje</th> : null}
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => {
              const payment = getPaymentStatus(o);
              const isSubscription = o.paymentType === "subscription";
              const subscriptionCanceled =
                (o.subscriptionStatus || "").toLowerCase() === "canceled";
              const cancellationRequested = Boolean(o.cancellationRequested);
              const canCancel =
                isSubscription &&
                !cancellationRequested &&
                !subscriptionCanceled;

              return (
                <tr key={o.id}>
                  <td>{o.orderNumber || o.id}</td>
                  <td>{formatDate(o.createdAt)}</td>
                  <td>
                    {o.offerId ? (
                      <S.ProductLink href={`/offer/${o.offerId}`}>
                        {o.title || o.productName || "—"}
                      </S.ProductLink>
                    ) : (
                      o.title || o.productName || "—"
                    )}
                  </td>
                  <td>{getPaymentTypeLabel(o)}</td>
                  <td>
                    {o.amount != null
                      ? `${o.amount} ${o.currency || "PLN"}`
                      : "—"}
                  </td>
                  <td>
                    <S.StatusBadge $tone={payment.tone}>
                      {payment.label}
                    </S.StatusBadge>
                  </td>
                  {hasAnySubscription ? (
                    <td>
                      {isSubscription ? (
                        <S.RowActionBtn
                          type="button"
                          disabled={busyId === o.id || !canCancel}
                          onClick={() => handleCancelSubscription(o)}
                        >
                          {busyId === o.id
                            ? "Wysyłanie…"
                            : subscriptionCanceled
                              ? "Subskrypcja anulowana"
                              : cancellationRequested
                                ? "Anulowanie w toku"
                                : "Anuluj subskrypcję"}
                        </S.RowActionBtn>
                      ) : null}
                    </td>
                  ) : null}
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableWrap>
    </>
  );
}

export default OrdersSection;
