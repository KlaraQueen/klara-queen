import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { showcaseData } from "../../../data/showcaseData";

const { images } = showcaseData;

const getCircularOffset = (activeIndex, itemIndex, total) => {
  let delta = itemIndex - activeIndex;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
};

function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <S.ShowcaseWrapper>
      <S.CardsViewport>
        {images.map((img, i) => (
          <S.SlideCard
            key={`${img}-${i}`}
            src={img}
            alt={`Projekt ${i + 1}`}
            $offset={getCircularOffset(activeIndex, i, images.length)}
            $active={i === activeIndex}
          />
        ))}
      </S.CardsViewport>
    </S.ShowcaseWrapper>
  );
}

export default Showcase;
