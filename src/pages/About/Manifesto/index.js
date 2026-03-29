import React from "react";
import * as S from "./styled";
import { aboutManifesto } from "../../../data/aboutData";

const Manifesto = () => (
  <S.Wrapper>
    {aboutManifesto.paragraphs.map((p, i) => (
      <S.Paragraph key={i}>{p}</S.Paragraph>
    ))}
    <S.Signature>{aboutManifesto.signature}</S.Signature>
  </S.Wrapper>
);

export default Manifesto;
