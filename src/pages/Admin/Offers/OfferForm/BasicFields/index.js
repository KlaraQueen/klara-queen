import React from "react";
import * as S from "./styled";
import { CATEGORIES, STYLES } from "../constants";
import ColorChips from "../ColorChips";

export default function BasicFields({ form, set, onToggleColor }) {
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
        <S.Label>Dodatkowa cena / wariant</S.Label>
        <S.Input
          value={form.altPrice || ""}
          onChange={(e) => set("altPrice", e.target.value)}
          placeholder="np. inna wersja pakietu"
        />
      </S.Group>

      <S.Full>
        <S.Label>Krótki opis</S.Label>
        <S.Input
          value={form.shortDescription}
          onChange={(e) => set("shortDescription", e.target.value)}
          placeholder="Prezentuj swoje prace i osiągnięcia"
        />
      </S.Full>

      <S.Group>
        <S.Label>Kategoria</S.Label>
        <S.Select
          value={form.category}
          onChange={(e) => set("category", e.target.value)}
        >
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </S.Select>
      </S.Group>
      <S.Group>
        <S.Label>Styl</S.Label>
        <S.Select
          value={form.style}
          onChange={(e) => set("style", e.target.value)}
        >
          {STYLES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </S.Select>
      </S.Group>

      <S.Full>
        <S.Label>Kolory</S.Label>
        <ColorChips colors={form.colors} onToggle={onToggleColor} />
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
