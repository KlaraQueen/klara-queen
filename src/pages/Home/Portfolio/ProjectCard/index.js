import React from "react";
import Container from "./Container";
import Image from "./Image";
import Icon from "./Icon";
import Title from "./Title";
import Divider from "./Divider";

function ProjectCard({ project }) {
  const { internalTo, url, title, description, image, icon, type } = project;

  const externalHref =
    !internalTo && type === "link" && typeof url === "string"
      ? url.trim()
      : undefined;

  return (
    <Container internalTo={internalTo} href={externalHref}>
      <Image image={image} title={title} />
      <Icon icon={icon} />
      <Title title={title} description={description} />
      <Divider />
    </Container>
  );
}

export default ProjectCard;
