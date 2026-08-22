import { useState, useEffect } from "react";
import { uploadOfferImage } from "../../../../services/offerService";
import { normalizeOfferImageFields } from "../../../../utils/offerImages";
import { EMPTY } from "./constants";

export default function useOfferForm(offer, onSave) {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (offer) {
      setForm({
        title: offer.title || "",
        shortDescription: offer.shortDescription || "",
        price: offer.price || "",
        altPrice: offer.altPrice || "",
        category: offer.category || "portfolio",
        style: offer.style || "elegancki",
        colors: offer.colors || [],
        fullDescription: offer.fullDescription || "",
        youtubeUrl: offer.youtubeUrl || "",
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

  const toggleColor = (color) => {
    setForm((p) => ({
      ...p,
      colors: p.colors.includes(color)
        ? p.colors.filter((c) => c !== color)
        : [...p.colors, color],
    }));
  };

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

  const handleMainImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadOfferImage(file, "main");
      set("image", url);
    } catch (err) {
      alert("Błąd uploadu: " + err.message);
    }
    setUploading(false);
  };

  const handleGalleryImages = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const urls = [];
      for (const file of files) {
        const url = await uploadOfferImage(file, "gallery");
        urls.push(url);
      }
      set("images", [...form.images, ...urls]);
    } catch (err) {
      alert("Błąd uploadu: " + err.message);
    }
    setUploading(false);
  };

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
    uploading,
    set,
    toggleColor,
    setFeature,
    addFeature,
    removeFeature,
    handleMainImage,
    handleGalleryImages,
    removeGalleryImage,
    handleSubmit,
  };
}
