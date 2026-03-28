import React from "react";
import * as S from "./styled";

function ProjectCard({ project }) {
  const { type, url, title, description, image, icon: Icon } = project;

  return (
    <S.CardContainer
      as={type === "link" ? "a" : "div"}
      href={type === "link" ? url : undefined}
      target={type === "link" ? "_blank" : undefined}
      isLink={type === "link"}
    >
      <S.DeviceWrapper>
        <S.ProjectImage src={image} alt={title} />
      </S.DeviceWrapper>

      <S.IconCircle>
        <Icon />
      </S.IconCircle>

      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.ProjectDescription>{description}</S.ProjectDescription>

      <S.GoldLine />
    </S.CardContainer>
  );
}

export default ProjectCard;
