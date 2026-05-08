import React from "react";
import * as S from "./styled";
import Offers from "./Offers";

export default function Admin() {
  return (
    <S.Page>
      <S.Container>
        <S.Header>
          <S.Title>Panel — oferty</S.Title>
        </S.Header>
        <Offers />
      </S.Container>
    </S.Page>
  );
}
