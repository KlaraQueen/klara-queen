import React from "react";
import * as S from "./styled";
import Header from "./Header";
import Steps from "./Steps";
import Materials from "./Materials";
import Guarantee from "./Guarantee";
import CTA from "./CTA";

const Cooperation = () => {
  return (
    <S.CooperationContainer>
      <S.CooperationContent>
        <Header />
        <Steps />
        <Materials />
        <Guarantee />
        <CTA />
      </S.CooperationContent>
    </S.CooperationContainer>
  );
};

export default Cooperation;
