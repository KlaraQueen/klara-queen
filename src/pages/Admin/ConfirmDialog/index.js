import React from "react";
import * as S from "./styled";

export default function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
  confirmLabel = "Tak, usuń",
  cancelLabel = "Nie",
}) {
  return (
    <S.Overlay>
      <S.Box>
        <S.Text>{message}</S.Text>
        <S.Actions>
          <S.CancelBtn onClick={onCancel}>{cancelLabel}</S.CancelBtn>
          <S.ConfirmBtn onClick={onConfirm}>{confirmLabel}</S.ConfirmBtn>
        </S.Actions>
      </S.Box>
    </S.Overlay>
  );
}
