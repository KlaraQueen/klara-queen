import React from "react";
import { testimonialsData } from "../../data/testimonialsData";
import * as S from "./styled";

function Testimonials() {
  return (
    <S.TestimonialsContainer>
      <S.TestimonialsHeader>
        <S.TestimonialsTitle>Opinie naszych klientów</S.TestimonialsTitle>
        <S.TestimonialsSubtitle>
          Sprawdź co mówią o nas ci, którzy już z nami pracowali
        </S.TestimonialsSubtitle>
      </S.TestimonialsHeader>

      <S.TestimonialsGrid>
        {testimonialsData.map((testimonial) => (
          <S.TestimonialCard key={testimonial.id}>
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
        ))}
      </S.TestimonialsGrid>
    </S.TestimonialsContainer>
  );
}

export default Testimonials;
