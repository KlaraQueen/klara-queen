import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createOrder } from "../../../services/orderService";
import { blikData } from "../../../data/blikData";
import * as S from "./styled";

function parseAmount(priceText) {
  const raw = String(priceText || "").replace(/,/g, ".");
  const match = raw.match(/\d+(\.\d+)?/);
  if (!match) return null;
  return Number(match[0]);
}

function paymentLabel(paymentType) {
  return paymentType === "blik" ? "BLIK na telefon" : "Kup teraz (Stripe)";
}

export default function GuestCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showBlikInfo, setShowBlikInfo] = useState(false);
  const [showStripeInfo, setShowStripeInfo] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    wantInvoice: false,
    invoiceCompany: "",
    invoiceNip: "",
    invoiceStreet: "",
    invoicePostalCode: "",
    invoiceCity: "",
  });

  const savedDraftRaw = sessionStorage.getItem("guestCheckoutDraft");
  let savedDraft = null;
  try {
    savedDraft = savedDraftRaw ? JSON.parse(savedDraftRaw) : null;
  } catch {
    savedDraft = null;
  }
  const checkoutState = location.state || savedDraft || null;
  const paymentType = checkoutState?.paymentType === "blik" ? "blik" : "one_time";
  const offer = checkoutState?.offer || null;

  const price = useMemo(() => {
    if (!offer) return "";
    return paymentType === "blik"
      ? offer.altPrice || offer.price || ""
      : offer.price || "";
  }, [offer, paymentType]);

  if (!offer) {
    return (
      <S.Page>
        <S.Card>
          <S.Title>Brak danych zamówienia</S.Title>
          <S.Subtitle>Wróć do oferty i wybierz zakup ponownie.</S.Subtitle>
          <S.Actions>
            <S.PrimaryButton type="button" onClick={() => navigate("/offer")}>
              Wróć do ofert
            </S.PrimaryButton>
          </S.Actions>
        </S.Card>
      </S.Page>
    );
  }

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Podaj imię i nazwisko oraz adres e-mail.");
      return;
    }

    if (form.wantInvoice) {
      if (
        !form.invoiceCompany.trim() ||
        !form.invoiceNip.trim() ||
        !form.invoiceStreet.trim() ||
        !form.invoicePostalCode.trim() ||
        !form.invoiceCity.trim()
      ) {
        setError("Uzupełnij wszystkie dane do faktury.");
        return;
      }
    }

    setLoading(true);
    try {
      await createOrder({
        userId: "guest",
        customerEmail: form.email.trim(),
        customerName: form.fullName.trim(),
        customerPhone: form.phone.trim(),
        wantInvoice: Boolean(form.wantInvoice),
        invoiceCompany: form.invoiceCompany.trim(),
        invoiceNip: form.invoiceNip.trim(),
        invoiceStreet: form.invoiceStreet.trim(),
        invoicePostalCode: form.invoicePostalCode.trim(),
        invoiceCity: form.invoiceCity.trim(),
        offerId: offer.id || "",
        offerTitle: offer.title || "",
        title: offer.title || "",
        productName: offer.title || "",
        price,
        amount: parseAmount(price),
        currency: "PLN",
        paymentProvider: paymentType === "blik" ? "blik" : "stripe",
        paymentType,
        paymentStatus: "pending",
        status: "nieopłacone",
        orderKind: paymentType,
      });

      if (paymentType === "blik") {
        setShowBlikInfo(true);
      } else if (offer.stripePaymentUrl) {
        window.open(offer.stripePaymentUrl, "_blank", "noopener,noreferrer");
        setShowStripeInfo(true);
      }
    } catch (err) {
      setError(err?.message || "Nie udało się zapisać zamówienia.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Page>
      <S.Card>
        <S.Title>Zakup jako gość</S.Title>
        <S.Subtitle>Uzupełnij dane i dokończ płatność.</S.Subtitle>

        <S.ProductBox>
          <S.ProductTitle>Podsumowanie</S.ProductTitle>
          <S.ProductInfo>Produkt: {offer.title}</S.ProductInfo>
          <S.ProductInfo>Płatność: {paymentLabel(paymentType)}</S.ProductInfo>
          <S.ProductInfo>Kwota: {price || "—"}</S.ProductInfo>
        </S.ProductBox>

        <S.Form onSubmit={handleSubmit}>
          <S.Label>Imię i nazwisko *</S.Label>
          <S.Input
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            placeholder="np. Klara Kowalska"
          />

          <S.Label>E-mail *</S.Label>
          <S.Input
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="np. kontakt@email.pl"
          />

          <S.Label>Telefon</S.Label>
          <S.Input
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            placeholder="np. +48 500 000 000"
          />

          <S.CheckboxRow>
            <input
              id="guest-want-invoice"
              type="checkbox"
              checked={form.wantInvoice}
              onChange={(e) => setField("wantInvoice", e.target.checked)}
            />
            <label htmlFor="guest-want-invoice">Chcę fakturę bez VAT</label>
          </S.CheckboxRow>

          {form.wantInvoice ? (
            <>
              <S.Label>Nazwa firmy *</S.Label>
              <S.Input
                value={form.invoiceCompany}
                onChange={(e) => setField("invoiceCompany", e.target.value)}
              />

              <S.Label>NIP/PESEL *</S.Label>
              <S.Input
                value={form.invoiceNip}
                onChange={(e) => setField("invoiceNip", e.target.value)}
              />

              <S.Label>Ulica i numer *</S.Label>
              <S.Input
                value={form.invoiceStreet}
                onChange={(e) => setField("invoiceStreet", e.target.value)}
              />

              <S.Label>Kod pocztowy *</S.Label>
              <S.Input
                value={form.invoicePostalCode}
                onChange={(e) => setField("invoicePostalCode", e.target.value)}
              />

              <S.Label>Miasto *</S.Label>
              <S.Input
                value={form.invoiceCity}
                onChange={(e) => setField("invoiceCity", e.target.value)}
              />
            </>
          ) : null}

          {error ? <S.Error>{error}</S.Error> : null}

          <S.Actions>
            <S.PrimaryButton type="submit" disabled={loading}>
              {loading ? "Zapisywanie..." : "Przejdź do płatności"}
            </S.PrimaryButton>
            <S.GhostButton type="button" onClick={() => navigate(`/offer/${offer.id}`)}>
              Wróć do oferty
            </S.GhostButton>
          </S.Actions>
        </S.Form>

        {showBlikInfo ? (
          <S.SuccessBox>
            <S.ProductInfo>
              Zamówienie zapisane. Wykonaj przelew BLIK na numer:{" "}
              <strong>{blikData.phoneNumber}</strong>
            </S.ProductInfo>
            <S.ProductInfo>{offer.blikPaymentInfo || blikData.instruction}</S.ProductInfo>
            <S.ProductInfo>
              Po zaksięgowaniu płatności na podany adres e-mail wyślemy
              potwierdzenie zakupu oraz informacje pozakupowe. Wiadomość powinna
              dotrzeć w ciągu kilku godzin. Jeśli jej nie będzie, sprawdź folder
              SPAM.
            </S.ProductInfo>
          </S.SuccessBox>
        ) : null}

        {showStripeInfo ? (
          <S.SuccessBox>
            <S.ProductInfo>
              Otworzyliśmy płatność Stripe w nowej karcie. Po opłaceniu na
              podany adres e-mail wyślemy potwierdzenie zakupu oraz informacje
              pozakupowe.
            </S.ProductInfo>
            <S.ProductInfo>
              Wiadomość powinna dotrzeć w ciągu kilku godzin. Jeśli jej nie
              będzie, sprawdź folder SPAM.
            </S.ProductInfo>
          </S.SuccessBox>
        ) : null}
      </S.Card>
    </S.Page>
  );
}
