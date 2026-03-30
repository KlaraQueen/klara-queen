import React from "react";
import * as S from "./styled";
import { cooperationData } from "../../../data/cooperationData";

const Materials = () => {
  return (
    <S.MaterialsSection>
      <S.MaterialsTitle>{cooperationData.materials.title}</S.MaterialsTitle>
      <S.MaterialsSubtitle>
        {cooperationData.materials.subtitle}
      </S.MaterialsSubtitle>
      <S.MaterialsIntro>{cooperationData.materials.intro}</S.MaterialsIntro>

      <S.MaterialsSectionsGrid>
        {cooperationData.materials.sections.map((section, index) => (
          <S.MaterialCategory key={index} highlight={section.highlight}>
            <S.MaterialCategoryHeader>
              <S.MaterialIcon>{section.icon}</S.MaterialIcon>
              <S.MaterialCategoryTitle>
                {section.title}
              </S.MaterialCategoryTitle>
            </S.MaterialCategoryHeader>

            <S.MaterialItemsList>
              {section.items.map((item, itemIdx) => (
                <S.MaterialItem key={itemIdx}>
                  <S.MaterialItemLabel>{item.label}</S.MaterialItemLabel>
                  <S.MaterialPointsList>
                    {item.points.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </S.MaterialPointsList>
                </S.MaterialItem>
              ))}
            </S.MaterialItemsList>
          </S.MaterialCategory>
        ))}
      </S.MaterialsSectionsGrid>
    </S.MaterialsSection>
  );
};

export default Materials;
