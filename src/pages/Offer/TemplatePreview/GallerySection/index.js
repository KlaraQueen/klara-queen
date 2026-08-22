import React, { useState, useEffect, useCallback } from "react";
import * as S from "./styled";

const BROKEN_SRC =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const GallerySection = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brokenSet, setBrokenSet] = useState(() => new Set());

  const safeImages = Array.isArray(images)
    ? images.filter((u) => u && typeof u === "string" && u.trim() !== "")
    : [];

  // Reset indeksu gdy zmieni się lista zdjęć
  useEffect(() => {
    setActiveIndex(0);
    setBrokenSet(new Set());
  }, [safeImages.length, safeImages[0]]);

  // Bezpieczny indeks — nigdy poza tablicą
  const safeActiveIndex =
    safeImages.length > 0 ? Math.min(activeIndex, safeImages.length - 1) : 0;

  const markBroken = useCallback((src) => {
    setBrokenSet((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (!isModalOpen || safeImages.length === 0) return;
      if (e.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + safeImages.length) % safeImages.length,
        );
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % safeImages.length);
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    },
    [isModalOpen, safeImages.length],
  );

  useEffect(() => {
    if (!isModalOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, handleKeyDown]);

  if (safeImages.length === 0) return null;

  const currentSrc = brokenSet.has(safeImages[safeActiveIndex])
    ? BROKEN_SRC
    : safeImages[safeActiveIndex];

  return (
    <>
      <S.GallerySectionWrapper>
        <S.ImageContainer
          onContextMenu={(e) => e.preventDefault()}
          onTouchStart={(e) => {
            if (e.touches.length > 1) e.preventDefault();
          }}
        >
          <S.MainImage
            key={currentSrc}
            src={currentSrc}
            alt={`${title} - zdjęcie ${safeActiveIndex + 1}`}
            referrerPolicy="no-referrer"
            onClick={() => setIsModalOpen(true)}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onError={() => markBroken(safeImages[safeActiveIndex])}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
          <S.Watermark>
            <S.WatermarkText>www.studioklara.pl</S.WatermarkText>
          </S.Watermark>
          <S.ExpandIcon onClick={() => setIsModalOpen(true)}>⛶</S.ExpandIcon>
        </S.ImageContainer>

        <S.ThumbsContainer>
          {safeImages.map((img, idx) => (
            <S.Thumb
              key={`${idx}-${img}`}
              src={brokenSet.has(img) ? BROKEN_SRC : img}
              alt={`Miniatura ${idx + 1}`}
              referrerPolicy="no-referrer"
              isActive={safeActiveIndex === idx}
              onClick={() => setActiveIndex(idx)}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
              onError={() => markBroken(img)}
            />
          ))}
        </S.ThumbsContainer>

        <S.Counter>
          {safeActiveIndex + 1} / {safeImages.length}
        </S.Counter>
      </S.GallerySectionWrapper>

      {isModalOpen && (
        <S.Modal onClick={() => setIsModalOpen(false)}>
          <S.ModalOverlay onClick={(e) => e.stopPropagation()}>
            <S.ImageContainer
              style={{
                margin: 0,
                width: "100%",
                height: "100%",
                maxHeight: "none",
              }}
            >
              <S.ModalImage
                src={currentSrc}
                alt={`${title} - ${safeActiveIndex + 1}`}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                onError={() => markBroken(safeImages[safeActiveIndex])}
              />
              <S.Watermark style={{ opacity: 0.12 }}>
                <S.WatermarkText>www.studioklara.pl</S.WatermarkText>
              </S.Watermark>
            </S.ImageContainer>
            <S.ModalCounter>
              {safeActiveIndex + 1} / {safeImages.length}
            </S.ModalCounter>

            <S.ArrowButton
              left
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + safeImages.length) % safeImages.length,
                )
              }
            >
              ‹
            </S.ArrowButton>

            <S.ArrowButton
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % safeImages.length)
              }
            >
              ›
            </S.ArrowButton>
          </S.ModalOverlay>

          <S.CloseButton onClick={() => setIsModalOpen(false)}>✕</S.CloseButton>
        </S.Modal>
      )}
    </>
  );
};

export default GallerySection;
