import React from "react";
import * as S from "./styled";
import useOfferForm from "./useOfferForm";
import BasicFields from "./BasicFields";
import DescriptionFields from "./DescriptionFields";
import ImageUpload from "./ImageUpload";
import FormActions from "./FormActions";

export default function OfferForm({ offer, onSave, onCancel }) {
  const {
    form,
    saving,
    set,
    setFeature,
    addFeature,
    removeFeature,
    removeGalleryImage,
    handleSubmit,
  } = useOfferForm(offer, onSave);

  return (
    <S.FormPanel as="form" onSubmit={handleSubmit}>
      <S.FormTitle>{offer ? "Edytuj ofertę" : "Nowa oferta"}</S.FormTitle>

      <BasicFields form={form} set={set} />

      <DescriptionFields
        form={form}
        set={set}
        onSetFeature={setFeature}
        onAddFeature={addFeature}
        onRemoveFeature={removeFeature}
      />

      <S.ImageRow>
        <S.ImageCol>
          <S.ImageLabel>Zdjęcie główne</S.ImageLabel>
          <ImageUpload
            images={form.image ? [form.image] : []}
            onAddUrl={(url) => set("image", url)}
            onRemove={() => set("image", "")}
          />
        </S.ImageCol>

        <S.ImageCol>
          <S.ImageLabel>Galeria zdjęć</S.ImageLabel>
          <ImageUpload
            images={form.images}
            onAddUrl={(url) => set("images", [...form.images, url])}
            onRemove={removeGalleryImage}
            multiple
          />
        </S.ImageCol>
      </S.ImageRow>

      <FormActions offer={offer} saving={saving} onCancel={onCancel} />
    </S.FormPanel>
  );
}
