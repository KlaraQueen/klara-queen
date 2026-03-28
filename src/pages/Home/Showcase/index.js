import React, { useState, useEffect } from "react";
import * as S from "./styled";
import img1 from "../../../assets/projects/pexels-dimkidama-15115560.jpg";
import img2 from "../../../assets/projects/pexels-firmbee-com-22729701-6963740.jpg";
import img3 from "../../../assets/projects/pexels-magnetme-3917414-5839461.jpg";
import img4 from "../../../assets/projects/pexels-rdne-7310202.jpg";

const images = [img1, img2, img3, img4, img2];

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
