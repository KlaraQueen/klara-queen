import React, { useState } from "react";
import * as S from "./styled";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageInput = (e) => {
    const value = e.target.value.trim();

    if (value === "") {
      setInputValue("");
      return;
    }

    const pageNumber = parseInt(value, 10);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      setInputValue("");
    } else if (pageNumber > totalPages) {
      onPageChange(totalPages);
      setInputValue("");
    } else if (pageNumber < 1) {
      onPageChange(1);
      setInputValue("");
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePageInput(e);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <S.PaginationContainer>
      <S.PaginationButton
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        aria-label="Pierwsza strona"
        title="Pierwsza strona"
      >
        <FaStepBackward />
      </S.PaginationButton>

      <S.PaginationButton
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        aria-label="Poprzednia strona"
        title="Poprzednia strona"
      >
        <FaChevronLeft />
      </S.PaginationButton>

      <S.Separator />

      <S.PageInfo>
        <span>{currentPage}</span>
        <span style={{ margin: "0 4px" }}>/</span>
        <span>{totalPages}</span>
      </S.PageInfo>

      <S.PageInput
        type="number"
        placeholder="Idź do"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handlePageInput}
        onKeyPress={handleInputKeyPress}
        min="1"
        max={totalPages}
        aria-label="Wpisz numer strony"
        title="Wpisz numer strony i naciśnij Enter"
      />

      <S.Separator />

      <S.PaginationButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Następna strona"
        title="Następna strona"
      >
        <FaChevronRight />
      </S.PaginationButton>

      <S.PaginationButton
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        aria-label="Ostatnia strona"
        title="Ostatnia strona"
      >
        <FaStepForward />
      </S.PaginationButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
