import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "../GuestCheckout/styled";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function BlikPayment() {
  const navigate = useNavigate();
  const query = useQuery();
  const orderNumber = query.get("orderNumber") || "—";
  const amount = query.get("amount") || "—";
  const phone = query.get("phone") || "—";
  const note = query.get("note") || "";

  return (
    <S.Page>
      <S.Card>
        <S.Title>Płatność za zamówienie</S.Title>
        <S.Subtitle>{orderNumber}</S.Subtitle>

        <S.ProductBox>
          <S.ProductTitle>Szczegóły płatności BLIK</S.ProductTitle>
          <S.ProductInfo>
            Numer telefonu do BLIK: <strong>{phone}</strong>
          </S.ProductInfo>
          <S.ProductInfo>
            Tytuł płatności: <strong>Płatność za zamówienie {orderNumber}</strong>
          </S.ProductInfo>
          <S.ProductInfo>
            Kwota: <strong>{amount}</strong>
          </S.ProductInfo>
          {note ? <S.ProductInfo>{note}</S.ProductInfo> : null}
        </S.ProductBox>

        <S.ProductInfo>
          Po zaksięgowaniu płatności na podany adres e-mail wyślemy potwierdzenie
          zakupu oraz informacje pozakupowe. Wiadomość powinna dotrzeć w ciągu
          kilku godzin. Jeśli jej nie będzie, sprawdź folder SPAM.
        </S.ProductInfo>

        <S.Actions>
          <S.PrimaryButton type="button" onClick={() => navigate("/offer")}>
            Przejdź do ofert
          </S.PrimaryButton>
        </S.Actions>
      </S.Card>
    </S.Page>
  );
}
