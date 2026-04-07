import React from "react";
import * as S from "./styled";
import { FaThLarge, FaList } from "react-icons/fa";

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <S.ViewToggleContainer>
      <S.ViewToggleButton
        onClick={() => onViewModeChange("grid")}
        active={viewMode === "grid"}
        aria-label="Widok kafelków"
        title="Widok kafelków"
      >
        <FaThLarge />
      </S.ViewToggleButton>
      <S.ViewToggleButton
        onClick={() => onViewModeChange("list")}
        active={viewMode === "list"}
        aria-label="Widok listy"
        title="Widok listy"
      >
        <FaList />
      </S.ViewToggleButton>
    </S.ViewToggleContainer>
  );
};

export default ViewToggle;
