import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";
import { socialMediaData } from "../../../../data/socialMediaData";
import { blikData } from "../../../../data/blikData";
import { createOrder } from "../../../../services/orderService";
import { useAuth } from "../../../../context/AuthContext";

const CTAComponent = ({ offer }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [authPromptType, setAuthPromptType] = React.useState(null);
  const [showStripeInfo, setShowStripeInfo] = React.useState(false);
  const stripePaymentUrl = (offer?.stripePaymentUrl || "").trim();
  const allegro = socialMediaData.find((item) => item.label === "Allegro")?.url;
  const blikPhone = (blikData?.phoneNumber || "").trim();
  const blikInstruction =
    (offer?.blikPaymentInfo || "").trim() || blikData?.instruction || "";

  const hasOneTime = Boolean(stripePaymentUrl);
  const paymentMode = offer?.paymentMode || "one_time";

  const canBuyNow =
    (paymentMode === "one_time" || paymentMode === "both") && hasOneTime;
  const canUseBlik = paymentMode === "one_time" || paymentMode === "both";

  const parseAmount = (priceText) => {
    const raw = String(priceText || "").replace(/,/g, ".");
    const match = raw.match(/\d+(\.\d+)?/);
    if (!match) return null;
    return Number(match[0]);
  };

  const getCustomerActionLabel = () => {
    if (offer?.customerActionType === "view_ready") {
      return "Zobacz gotowy produkt";
    }
    if (offer?.customerActionType === "edit_product") {
      return "Edytuj swój produkt";
    }
    if (offer?.customerActionType === "custom") {
      return (offer?.customerActionLabel || "").trim() || "Otwórz produkt";
    }
    return "";
  };

  const normalizePrice = (paymentType) => {
    if (paymentType === "blik") {
      return offer?.altPrice || offer?.price || "";
    }
    return offer?.price || "";
  };

  const buildOrderPayload = ({ paymentType, paymentProvider, customer, userId }) => {
    const price = normalizePrice(paymentType);
    return {
      userId: userId || "",
      customerEmail: customer.email || "",
      customerName: customer.name || "",
      customerPhone: customer.phone || "",
      wantInvoice: Boolean(customer.wantInvoice),
      invoiceCompany: customer.invoiceCompany || "",
      invoiceNip: customer.invoiceNip || "",
      invoiceStreet: customer.invoiceStreet || "",
      invoicePostalCode: customer.invoicePostalCode || "",
      invoiceCity: customer.invoiceCity || "",
      offerId: offer?.id || "",
      offerTitle: offer?.title || "",
      title: offer?.title || "",
      productName: offer?.title || "",
      price,
      amount: parseAmount(price),
      currency: "PLN",
      paymentProvider,
      paymentType,
      paymentStatus: "pending",
      status: "nieopłacone",
      orderKind: paymentType,
      customerActionType: offer?.customerActionType || "none",
      customerActionLabel: getCustomerActionLabel(),
      customerActionUrl:
        (offer?.customerActionUrl || "").trim() ||
        (offer?.id ? `/offer/${offer.id}` : ""),
    };
  };

  const createOrderSafe = async (payload) => {
    try {
      return await createOrder(payload);
    } catch {
      // Do not block checkout if Firestore write fails.
      return null;
    }
  };

  const openBlikWindow = ({ orderNumber, amount }) => {
    const params = new URLSearchParams({
      orderNumber: orderNumber || "",
      amount: amount || "",
      phone: blikPhone || "",
      note: blikInstruction || "",
    });
    window.open(
      `${window.location.origin}/payment/blik?${params.toString()}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openAuthPrompt = (paymentType) => {
    setAuthPromptType(paymentType);
  };

  const closeModals = () => {
    setAuthPromptType(null);
  };

  const handleStripeCheckout = async () => {
    if (!stripePaymentUrl) return;

    await createOrderSafe(
      buildOrderPayload({
        paymentType: "one_time",
        paymentProvider: "stripe",
        userId: user?.uid || "guest",
        customer: {
          name: user?.displayName || "",
          email: user?.email || "",
          phone: "",
          wantInvoice: false,
        },
      }),
    );
    setAuthPromptType(null);
    window.open(stripePaymentUrl, "_blank", "noopener,noreferrer");
    setShowStripeInfo(true);
  };

  const handleBlikCheckout = async () => {
    const price = normalizePrice("blik");
    const created = await createOrderSafe(
      buildOrderPayload({
        paymentType: "blik",
        paymentProvider: "blik",
        userId: user?.uid || "guest",
        customer: {
          name: user?.displayName || "",
          email: user?.email || "",
          phone: "",
          wantInvoice: false,
        },
      }),
    );
    setAuthPromptType(null);
    openBlikWindow({
      orderNumber: created?.orderNumber || "",
      amount: price,
    });
  };

  const handleProtectedCheckout = async (paymentType) => {
    if (!user) {
      openAuthPrompt(paymentType);
      return;
    }
    if (paymentType === "blik") {
      await handleBlikCheckout();
      return;
    }
    await handleStripeCheckout();
  };

  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        {canBuyNow ? (
          <S.PrimaryButton
            as="button"
            type="button"
            onClick={() => handleProtectedCheckout("one_time")}
          >
            Kup teraz ({offer?.price || "cena w opisie"})
          </S.PrimaryButton>
        ) : null}

        {canUseBlik ? (
          <S.SecondaryButton
            as="button"
            type="button"
            onClick={() => handleProtectedCheckout("blik")}
          >
            BLIK na telefon ({offer?.altPrice || offer?.price || "cena w opisie"})
          </S.SecondaryButton>
        ) : null}

        {allegro ? (
          <S.SecondaryButton
            href={allegro}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zakup Allegro
          </S.SecondaryButton>
        ) : null}
      </S.CTAButtons>

      {authPromptType ? (
        <S.ModalOverlay>
          <S.ModalCard>
            <S.ModalCloseButton type="button" aria-label="Zamknij" onClick={closeModals}>
              ×
            </S.ModalCloseButton>
            <S.ModalTitle>Wybierz sposób zakupu</S.ModalTitle>
            <S.ModalText>Możesz się zalogować albo kupić jako gość.</S.ModalText>
            <S.ModalActions>
              <S.ModalButton
                type="button"
                onClick={() => {
                  closeModals();
                  navigate("/login", { state: { from: location.pathname } });
                }}
              >
                Zaloguj się
              </S.ModalButton>
              <S.ModalButton
                type="button"
                onClick={() => {
                  closeModals();
                  const checkoutState = {
                    paymentType: authPromptType,
                    offer: {
                      id: offer?.id || "",
                      title: offer?.title || "",
                      price: offer?.price || "",
                      altPrice: offer?.altPrice || "",
                      stripePaymentUrl,
                      blikPaymentInfo: offer?.blikPaymentInfo || "",
                    },
                  };
                  sessionStorage.setItem(
                    "guestCheckoutDraft",
                    JSON.stringify(checkoutState),
                  );
                  navigate("/checkout/guest", {
                    state: checkoutState,
                  });
                }}
              >
                Zakup jako gość
              </S.ModalButton>
            </S.ModalActions>
          </S.ModalCard>
        </S.ModalOverlay>
      ) : null}

      {showStripeInfo ? (
        <S.ModalOverlay>
          <S.ModalCard>
            <S.ModalCloseButton
              type="button"
              aria-label="Zamknij"
              onClick={() => setShowStripeInfo(false)}
            >
              ×
            </S.ModalCloseButton>
            <S.ModalTitle>Dziękujemy za zakup</S.ModalTitle>
            <S.ModalText>
              Otworzyliśmy płatność Stripe w nowej karcie. Po jej opłaceniu na
              podany adres e-mail wyślemy potwierdzenie zakupu oraz informacje
              pozakupowe.
            </S.ModalText>
            <S.ModalText>
              Wiadomość powinna dotrzeć w ciągu kilku godzin. Jeśli jej nie
              będzie, sprawdź folder SPAM.
            </S.ModalText>
            <S.ModalActions>
              <S.ModalButton
                type="button"
                onClick={() => {
                  setShowStripeInfo(false);
                  navigate("/offer");
                }}
              >
                OK
              </S.ModalButton>
            </S.ModalActions>
          </S.ModalCard>
        </S.ModalOverlay>
      ) : null}
    </S.CTASection>
  );
};

export default CTAComponent;
