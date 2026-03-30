import React from "react";
import Container from "./Container";
import Image from "./Image";
import Icon from "./Icon";
import Title from "./Title";
import Divider from "./Divider";

function ProjectCard({ project }) {
  const { type, url, title, description, image, icon } = project;

  return (
    <Container type={type} url={url} isLink={type === "link"}>
      <Image image={image} title={title} />
      <Icon icon={icon} />
      <Title title={title} description={description} />
      <Divider />
    </Container>
  );
}

export default ProjectCard;
