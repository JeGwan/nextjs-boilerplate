import Button, { ButtonProps } from "@app/components/atoms/Button";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  & > button {
    margin: 0 4px;
    &.btn-number {
      width: 44px;
      padding: 0;
    }
  }
`;

interface Props {
  total: number;
  numsPerPage: number;
  currentPage: number;
  numsOfPage?: number;
  onPageChange?: (page: number) => void;
  buttonSize?: ButtonProps["size"];
}

const Pagination = ({
  total,
  numsPerPage,
  currentPage,
  numsOfPage = 5,
  onPageChange = () => {},
  buttonSize,
}: Props) => {
  const totalPages = Math.ceil(total / numsPerPage);
  const startPage = Math.floor((currentPage - 1) / numsOfPage) * numsOfPage + 1;
  const endPage = Math.min(startPage + numsOfPage - 1, totalPages);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return (
    <Wrapper>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        className="btn-before"
        size={buttonSize}
        disabled={currentPage <= 1}
      >
        이전
      </Button>
      {pages.map((page, i) => (
        <Button
          className="btn-number"
          onClick={() => onPageChange(page)}
          type={page === currentPage ? "primary" : "default"}
          key={i}
          size={buttonSize}
        >
          {page}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        className="btn-next"
        size={buttonSize}
        disabled={currentPage >= totalPages}
      >
        다음
      </Button>
    </Wrapper>
  );
};

export default Pagination;
