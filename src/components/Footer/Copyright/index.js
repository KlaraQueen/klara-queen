import React from "react";
import * as S from "./styled";

function Copyright({ data }) {
  return (
    <S.CopyrightBar>
      <S.CopyrightText>{data.copy}</S.CopyrightText>
      <S.ContactEmail href={`mailto:${data.email}`}>
        {data.email}
      </S.ContactEmail>
    </S.CopyrightBar>
  );
}

export default Copyright;
