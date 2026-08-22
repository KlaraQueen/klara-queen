import { useState, useEffect } from "react";
import { normalizeOfferImageFields } from "../../../../utils/offerImages";
import { EMPTY } from "./constants";

export default function useOfferForm(offer, onSave) {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (offer) {
      setForm({
        title: offer.title || "",
        shortDescription: offer.shortDescription || "",
        price: offer.price || "",
        altPrice: offer.altPrice || "",
        lowestPrice30Days: offer.lowestPrice30Days || "",
        fullDescription: offer.fullDescription || "",
        liveUrl: offer.liveUrl || "",
        features:
          offer.features && offer.features.length > 0
            ? [...offer.features]
            : [""],
        image: offer.image || "",
        images: offer.images || [],
        allegroUrl: offer.allegroUrl || "",
        customerActionType: offer.customerActionType || "none",
        customerActionUrl: offer.customerActionUrl || "",
        customerActionLabel: offer.customerActionLabel || "",
      });
    } else {
      setForm(EMPTY);
    }
  }, [offer]);

  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const setFeature = (i, val) => {
    const copy = [...form.features];
    copy[i] = val;
    set("features", copy);
  };

  const addFeature = () => set("features", [...form.features, ""]);

  const removeFeature = (i) =>
    set(
      "features",
      form.features.filter((_, idx) => idx !== i),
    );

  const removeGalleryImage = (idx) => {
    set(
      "images",
      form.images.filter((_, i) => i !== idx),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.price.trim()) return;
    setSaving(true);
    const data = normalizeOfferImageFields({
      ...form,
      features: form.features.filter((f) => f.trim()),
    });
    await onSave(data);
    setSaving(false);
  };

  return {
    form,
    saving,
    set,
    setFeature,
    addFeature,
    removeFeature,
    removeGalleryImage,
    handleSubmit,
  };
}
