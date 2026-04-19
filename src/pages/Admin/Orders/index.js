import React, { useState, useEffect, useCallback } from "react";
import * as S from "./styled";
import OrderTable from "./OrderTable";
import OrderDetails from "./OrderDetails";
import Toast from "../Toast";
import { fetchOrders } from "../../../services/orderService";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewing, setViewing] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, error = false) => {
    setToast({ msg, error });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch (err) {
      showToast("Błąd ładowania zamówień: " + err.message, true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleBack = () => setViewing(null);

  const handleUpdate = () => {
    showToast("Status zaktualizowany");
    load();
    setViewing(null);
  };

  if (viewing) {
    return (
      <S.Section>
        <OrderDetails order={viewing} onBack={handleBack} onUpdate={handleUpdate} />
        <Toast message={toast?.msg} error={toast?.error} />
      </S.Section>
    );
  }

  return (
    <S.Section>
      {loading ? (
        <S.Spinner>Ładowanie zamówień…</S.Spinner>
      ) : (
        <S.TableWrap>
          <OrderTable orders={orders} onView={setViewing} />
        </S.TableWrap>
      )}
      <Toast message={toast?.msg} error={toast?.error} />
    </S.Section>
  );
}
