import React from "react";
import * as S from "./styled";

import { useNavigate } from "react-router-dom";

const aboutFaq = [
  {
    id: 1,
    question: "Czy muszę płacić za serwer (hosting) co roku?",
    answer:
      'Nie. To nasza największa przewaga. Twoja strona korzysta z profesjonalnej infrastruktury, dzięki której serwer masz za darmo na zawsze (lub do kiedy współpracujesz własnie z nami). Nie płacisz co miesiąc ani co rok za "utrzymanie systemu". Jedyny koszt to odnowienie domeny (ok. 150 zł rocznie, może zmieniać się w zależności od ceny aktualnej domeny), przy czym pierwszy rok masz już wliczony w cenę strony. Jest to koszt, którego nie unikniesz, niezależnie od tego, z jakim dostawcą współpracujesz. My po prostu oferujemy Ci darmowy hosting, co jest ogromną oszczędnością w porównaniu do innych rozwiązań na rynku.',
  },
  {
    id: 2,
    question: "Skąd bierze się tak krótki czas realizacji (96h)?",
    answer:
      "To kwestia perfekcyjnej optymalizacji. Pracujemy na naszych autorskich fundamentach, które projektowaliśmy od zera przez wiele miesięcy. Zamiast tracić czas na powtarzalne ustawienia techniczne, od razu przechodzimy do personalizacji Twojej marki. Cały proces zamykamy zazwyczaj w 96 godzinach roboczych.",
  },
  {
    id: 3,
    question: "Co w przypadku, gdy będę potrzebować zmian w przyszłości?",
    answer: "...",
  },
];

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <S.FAQWrapper>
      <S.List>
        {aboutFaq.map((item) => (
          <S.Item key={item.id}>
            <S.Question>{item.question}</S.Question>
            <S.Answer>{item.answer}</S.Answer>
          </S.Item>
        ))}
      </S.List>
      <S.FAQButton onClick={() => navigate("/questions")}>
        Zobacz Więcej Pytań
      </S.FAQButton>
    </S.FAQWrapper>
  );
};

export default FAQ;
