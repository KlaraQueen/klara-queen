import React, { useRef } from "react";
import * as S from "./styled";
import { testimonialsData } from "../../../data/testimonialsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {
  const trackRef = useRef(null);
  const busy = useRef(false);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el || busy.current) return;
    const firstCard = el.firstElementChild;
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(el).gap) || 16;
    const step = firstCard.offsetWidth + gap;
    const max = el.scrollWidth - el.clientWidth;

    busy.current = true;
    if (dir > 0 && el.scrollLeft >= max - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir < 0 && el.scrollLeft <= 2) {
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * step, behavior: "smooth" });
    }
    setTimeout(() => {
      busy.current = false;
    }, 580);
  };

  return (
    <S.TestimonialsSection>
      <S.TitleWrapper>
        <S.SectionTitle>Opinie Naszych Klientów</S.SectionTitle>
        <S.SectionSubtitle>To mówią o nas ci, którzy nam zaufali</S.SectionSubtitle>
      </S.TitleWrapper>

      <S.SliderOuter>
        <S.ArrowButton
          onClick={() => scroll(-1)}
          aria-label="Poprzednia opinia"
        >
          <FaChevronLeft />
        </S.ArrowButton>

        <S.Track ref={trackRef}>
          {testimonialsData.map((testimonial) => (
            <S.TestimonialsGrid key={testimonial.id}>
              <S.TestimonialCard>
                <S.Stars>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S.Star key={i}>★</S.Star>
                  ))}
                </S.Stars>
                <S.TestimonialText>"{testimonial.text}"</S.TestimonialText>
                <S.TestimonialAuthor>
                  <S.AuthorName>{testimonial.name}</S.AuthorName>
                  <S.AuthorCompany>{testimonial.company}</S.AuthorCompany>
                </S.TestimonialAuthor>
              </S.TestimonialCard>
            </S.TestimonialsGrid>
          ))}
        </S.Track>

        <S.ArrowButton onClick={() => scroll(1)} aria-label="Następna opinia">
          <FaChevronRight />
        </S.ArrowButton>
      </S.SliderOuter>

      <S.CTAContainer>
        <S.ViewMoreLink href="/testimonials">
          Przeczytaj wszystkie opinie →
        </S.ViewMoreLink>
      </S.CTAContainer>
    </S.TestimonialsSection>
  );
}

export default Testimonials;
