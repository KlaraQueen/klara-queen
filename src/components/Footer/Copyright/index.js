import React, { useState, useEffect } from "react";
import * as S from "./styled";

function Copyright({ data }) {
  const [visitCount, setVisitCount] = useState(67100);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return; // Prevent double increment

    const storedCount = localStorage.getItem("visitCount67100");
    const lastSession = localStorage.getItem("lastSessionTime");
    const currentTime = new Date().getTime();
    const parsedCount = Number.parseInt(storedCount, 10);

    if (storedCount && lastSession && parsedCount >= 67100) {
      const timeDiff = currentTime - parseInt(lastSession);
      if (timeDiff > 60000) {
        const newCount = parsedCount + 1;
        localStorage.setItem("visitCount67100", newCount);
        localStorage.setItem("lastSessionTime", currentTime);
        setVisitCount(newCount);
      } else {
        setVisitCount(parsedCount);
      }
    } else {
      localStorage.setItem("visitCount67100", 67101);
      localStorage.setItem("lastSessionTime", currentTime);
      setVisitCount(67100);
    }

    setIsInitialized(true);
  }, [isInitialized]);

  return (
    <S.CopyrightBar>
      <S.CopyrightText>{data.copy}</S.CopyrightText>
      <S.VisitCounter>
        Odwiedzin na stronie:{" "}
        <strong>{visitCount.toLocaleString("pl-PL")}</strong>
      </S.VisitCounter>
      <S.ContactEmail href={`mailto:${data.email}`}>
        {data.email}
      </S.ContactEmail>
    </S.CopyrightBar>
  );
}

export default Copyright;
