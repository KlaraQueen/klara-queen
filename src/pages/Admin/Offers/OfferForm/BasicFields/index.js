import React from "react";
import * as S from "./styled";

export default function BasicFields({ form, set }) {
  return (
    <S.Grid>
      <S.Group>
        <S.Label>Tytuł *</S.Label>
        <S.Input
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="np. Strona Portfolio"
          required
        />
      </S.Group>

      <S.Group>
        <S.Label>Cena (informacyjnie) *</S.Label>
        <S.Input
          value={form.price}
          onChange={(e) => set("price", e.target.value)}
          placeholder="np. 1490 zł"
          required
        />
      </S.Group>

      <S.Group>
        <S.Label>Kod produktu</S.Label>
        <S.Input
          value={form.altPrice || ""}
          onChange={(e) => set("altPrice", e.target.value)}
          placeholder="np. inna wersja pakietu"
        />
      </S.Group>

      <S.Full>
        <S.Label>Najniższa cena z 30 dni</S.Label>
        <S.Input
          value={form.lowestPrice30Days || ""}
          onChange={(e) => set("lowestPrice30Days", e.target.value)}
          placeholder="np. 1290 zł"
        />
      </S.Full>

      <S.Full>
        <S.Label>Krótki opis</S.Label>
        <S.Input
          value={form.shortDescription}
          onChange={(e) => set("shortDescription", e.target.value)}
          placeholder="Prezentuj swoje prace i osiągnięcia"
        />
      </S.Full>

      <S.Full>
        <S.Label>Link Allegro (opcjonalnie)</S.Label>
        <S.Input
          value={form.allegroUrl || ""}
          onChange={(e) => set("allegroUrl", e.target.value)}
          placeholder="Np. link do aukcji — puste = użyty adres Allegro z ustawień mediów społecznościowych"
          type="url"
        />
      </S.Full>
    </S.Grid>
  );
}
