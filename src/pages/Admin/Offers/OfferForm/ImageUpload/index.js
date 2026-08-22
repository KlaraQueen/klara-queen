import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import * as S from "./styled";

export default function ImageUpload({
  images,
  onAddUrl,
  onRemove,
  multiple,
}) {
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;
    onAddUrl(trimmedUrl);
    setUrl("");
  };

  return (
    <>
      {images.length > 0 && (
        <S.Grid>
          {images.map((url, i) => (
            <S.Item key={i}>
              <img src={url} alt={`preview-${i}`} />
              <S.Remove type="button" onClick={() => onRemove(i)}>
                ×
              </S.Remove>
            </S.Item>
          ))}
        </S.Grid>
      )}
      <S.UrlRow>
        <S.UrlInput
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleAdd();
            }
          }}
          placeholder="Wklej publiczny adres zdjęcia z GitHuba"
          aria-label="Adres zdjęcia"
        />
        <S.AddButton type="button" onClick={handleAdd}>
          <FaLink aria-hidden />
          Dodaj
        </S.AddButton>
      </S.UrlRow>
      <S.HelpText>
        {multiple
          ? "Dodaj osobny adres dla każdego zdjęcia galerii."
          : "Wklej adres zdjęcia z publicznego repozytorium GitHub."}
      </S.HelpText>
    </>
  );
}
