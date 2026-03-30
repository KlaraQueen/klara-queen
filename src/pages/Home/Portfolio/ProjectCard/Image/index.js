import React from "react";
import * as S from "./styled";

function Image({ image, title }) {
  return (
    <S.DeviceWrapper>
      <S.ProjectImage src={image} alt={title} />
    </S.DeviceWrapper>
  );
}

export default Image;
