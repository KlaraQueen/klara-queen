import styled from "styled-components";
import { theme } from "../../theme";

export const TestimonialsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

export const TestimonialsTitle = styled.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${theme.colors.testimonialAccent} 0%,
    #764ba2 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
`;

export const TestimonialsSubtitle = styled.p`
  font-size: clamp(16px, 2vw, 20px);
  color: ${theme.colors.testimonialSubtext};
  max-width: 600px;
  margin: 0 auto;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${theme.colors.testimonialBgHover};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Star = styled.span`
  color: #ffd700;
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.testimonialText};
  margin-bottom: auto;
  margin-bottom: 25px;
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthorName = styled.strong`
  font-size: 16px;
  color: ${theme.colors.white};
  font-weight: 600;
`;

export const AuthorCompany = styled.span`
  font-size: 14px;
  color: ${theme.colors.testimonialSubtext};
`;
