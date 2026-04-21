import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";
import { socialMediaData } from "../../../../data/socialMediaData";
import { createOrder } from "../../../../services/orderService";
import { useAuth } from "../../../../context/AuthContext";

const CTAComponent = ({ offer }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const stripePaymentUrl = (offer?.stripePaymentUrl || "").trim();
  const stripeSubscriptionUrl = (offer?.stripeSubscriptionUrl || "").trim();
  const allegro = socialMediaData.find((item) => item.label === "Allegro")?.url;

  const hasOneTime = Boolean(stripePaymentUrl);
  const hasSubscription = Boolean(stripeSubscriptionUrl);
  const paymentMode = offer?.paymentMode || "one_time";

  const canBuyNow =
    (paymentMode === "one_time" || paymentMode === "both") && hasOneTime;
  const canSubscribe =
    (paymentMode === "subscription" || paymentMode === "both") &&
    hasSubscription;

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

  const handleStripeCheckout = async (url, paymentType) => {
    if (!url) return;

    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    try {
      const amount = parseAmount(offer?.price);
      await createOrder({
        userId: user.uid,
        customerEmail: user.email || "",
        customerName: user.displayName || "",
        offerId: offer?.id || "",
        offerTitle: offer?.title || "",
        title: offer?.title || "",
        productName: offer?.title || "",
        price: offer?.price || "",
        amount,
        currency: "PLN",
        paymentProvider: "stripe",
        paymentType,
        paymentStatus: "pending",
        status: "nieopłacone",
        orderKind: paymentType,
        customerActionType: offer?.customerActionType || "none",
        customerActionLabel: getCustomerActionLabel(),
        customerActionUrl:
          (offer?.customerActionUrl || "").trim() ||
          (offer?.id ? `/offer/${offer.id}` : ""),
      });
    } catch {
      // Do not block checkout if Firestore write fails.
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <S.CTASection>
      <S.CTATitle>Interesuje Cię ten szablon?</S.CTATitle>
      <S.CTAButtons>
        {canBuyNow ? (
          <S.PrimaryButton
            as="button"
            type="button"
            onClick={() => handleStripeCheckout(stripePaymentUrl, "one_time")}
          >
            Kup teraz
          </S.PrimaryButton>
        ) : null}

        {canSubscribe ? (
          <S.SecondaryButton
            as="button"
            type="button"
            onClick={() =>
              handleStripeCheckout(stripeSubscriptionUrl, "subscription")
            }
          >
            Subskrybuj
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
    </S.CTASection>
  );
};

export default CTAComponent;
