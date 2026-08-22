import React from "react";
import * as S from "./styled";

export default function FeatureList({ features, onSet, onAdd, onRemove }) {
  return (
    <>
      {features.map((f, i) => (
        <S.Row key={i}>
          <S.Input
            value={f}
            onChange={(e) => onSet(i, e.target.value)}
            placeholder={`Cecha ${i + 1}`}
          />
          {features.length > 1 && (
            <S.RemoveBtn type="button" onClick={() => onRemove(i)}>
              ×
            </S.RemoveBtn>
          )}
        </S.Row>
      ))}
      <S.AddBtn type="button" onClick={onAdd}>
        + Dodaj cechę
      </S.AddBtn>
    </>
  );
}
