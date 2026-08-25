import React from "react";
import * as S from "./styled";

const aboutManifesto = {
  paragraphs: [
    "Stworzyliśmy ekosystem wzorców, które wyznaczają standardy - sprawdzone, doskonale zaprojektowane i gotowe do Twojej marki.",
    "Ty wybierasz fundament z naszej autorskiej kolekcji, my dostosowujemy go do Twojej tożsamości. Rezultat? Estetyka bez kompromisów i natychmiastowy autorytet w Twojej branży.",
    "Każdy szablon to efekt setki godzin testowania, niezliczonych iteracji i wiedzy zdobytej pracując z luksusowymi markami na całym świecie.",
  ],
  signature:
    "Autorska Kolekcja · Sprawdzone Struktury · Estetyka Bez Kompromisów",
};

const Manifesto = () => (
  <S.Wrapper>
    {aboutManifesto.paragraphs.map((p, i) => (
      <S.Paragraph key={i}>{p}</S.Paragraph>
    ))}
    <S.Signature>{aboutManifesto.signature}</S.Signature>
  </S.Wrapper>
);

export default Manifesto;
