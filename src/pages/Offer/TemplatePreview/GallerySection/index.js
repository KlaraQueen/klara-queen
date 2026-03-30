import React, { useState, useEffect } from "react";
import * as S from "./styled";

const GallerySection = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  if (!images || images.length === 0) return null;

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
            src={images[activeIndex]}
            alt={`${title} - zdjęcie ${activeIndex + 1}`}
            onClick={() => setIsModalOpen(true)}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            style={{ cursor: "pointer", userSelect: "none" }}
          />
          <S.Watermark>
            <span>www.studioklara.pl</span>
          </S.Watermark>
          <S.ExpandIcon onClick={() => setIsModalOpen(true)}>⛶</S.ExpandIcon>
        </S.ImageContainer>

        <S.ThumbsContainer>
          {images.map((img, idx) => (
            <S.Thumb
              key={idx}
              src={img}
              alt={`Miniatura ${idx + 1}`}
              isActive={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
          ))}
        </S.ThumbsContainer>

        <S.Counter>
          {activeIndex + 1} / {images.length}
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
                src={images[activeIndex]}
                alt={`${title} - ${activeIndex + 1}`}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
              />
              <S.Watermark style={{ opacity: 0.35 }}>
                <span>www.studioklara.pl</span>
              </S.Watermark>
            </S.ImageContainer>
            <S.ModalCounter>
              {activeIndex + 1} / {images.length}
            </S.ModalCounter>

            <S.ArrowButton
              left
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + images.length) % images.length,
                )
              }
            >
              ‹
            </S.ArrowButton>

            <S.ArrowButton
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % images.length)
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
