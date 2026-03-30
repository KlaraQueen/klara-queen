import React from "react";
import * as S from "./styled";

function Icon({ icon: Icon }) {
  return (
    <S.IconCircle>
      <Icon />
    </S.IconCircle>
  );
}

export default Icon;
