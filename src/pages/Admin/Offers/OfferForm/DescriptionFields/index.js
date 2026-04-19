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
        <S.Label>YouTube URL</S.Label>
        <S.Input
          value={form.youtubeUrl}
          onChange={(e) => set("youtubeUrl", e.target.value)}
          placeholder="https://www.youtube.com/embed/..."
        />
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
