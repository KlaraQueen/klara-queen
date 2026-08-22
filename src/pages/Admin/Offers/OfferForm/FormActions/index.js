import React from "react";
import * as S from "./styled";

export default function FormActions({ offer, saving, uploading, onCancel }) {
  return (
    <S.Actions>
      <S.CancelBtn type="button" onClick={onCancel}>
        Anuluj
      </S.CancelBtn>
      <S.SaveBtn type="submit" disabled={saving || uploading}>
        {saving ? "Zapisywanie…" : offer ? "Zapisz zmiany" : "Dodaj ofertę"}
      </S.SaveBtn>
    </S.Actions>
  );
}
