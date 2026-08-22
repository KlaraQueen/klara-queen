import React from "react";
import * as S from "./styled";
import FeatureList from "../FeatureList";

export default function DescriptionFields({
  form,
  set,
  onSetFeature,
  onAddFeature,
  onRemoveFeature,
}) {
  return (
    <S.Wrap>
      <S.Group>
        <S.Label>Pełny opis</S.Label>
        <S.TextArea
          value={form.fullDescription}
          onChange={(e) => set("fullDescription", e.target.value)}
          placeholder="Szczegółowy opis oferty…"
        />
      </S.Group>

      <S.Group>
        <S.Label>Link do strony na żywo</S.Label>
        <S.Input
          type="url"
          value={form.liveUrl}
          onChange={(e) => set("liveUrl", e.target.value)}
          placeholder="https://twoja-strona.github.io/projekt"
          inputMode="url"
        />
        <S.Hint>
          Dodaj publiczny adres projektu, który klient może otworzyć w nowej
          karcie.
        </S.Hint>
      </S.Group>

      <S.Group>
        <S.Label>Cechy / Features</S.Label>
        <FeatureList
          features={form.features}
          onSet={onSetFeature}
          onAdd={onAddFeature}
          onRemove={onRemoveFeature}
        />
      </S.Group>
    </S.Wrap>
  );
}
