import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const List = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  gap: 5px;
  button {
    background-color: transparent;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    &:not(:disabled):hover {
      background-color: #2a2f38;
      border-radius: 5px;
    }
    &:disabled {
      cursor: auto;
    }
    &.active {
      background-color: #2a2f38;
    }
  }
`;

const Pagination = ({ resCount, perPage, currentPage, setCurrentPage }) => {
  const maxPagesAll = resCount ? Math.ceil(resCount / perPage) : 0;
  const maxPages = maxPagesAll > 100 ? 100 : maxPagesAll;

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper>
      <List>
        <button disabled={currentPage === 1}>&#10094; prev</button>

        {maxPages < 8 && (
          <div>
            {[...Array(maxPages)].map((el, i) => (
              <button
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => handlePagination(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {maxPages > 7 && (
          <div>
            {currentPage > 4 && (
              <>
                <button
                  className={currentPage === 1 ? "active" : ""}
                  onClick={() => handlePagination(1)}
                >
                  1
                </button>
                <button disabled>...</button>
              </>
            )}

            {[...Array(maxPages)].map((el, i) => {
              const isStart = currentPage < 5;
              const isEnd = currentPage >= maxPages - 4;

              if (isStart && i + 1 < 7) {
                return (
                  <button
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePagination(i + 1)}
                  >
                    {i + 1}
                  </button>
                );
              }

              if (isEnd && i + 1 > maxPages - 7) {
                return (
                  <button
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePagination(i + 1)}
                  >
                    {i + 1}
                  </button>
                );
              }

              if (
                !isStart &&
                i + 1 >= currentPage - 2 &&
                i + 1 <= currentPage + 2
              ) {
                return (
                  <button
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePagination(i + 1)}
                  >
                    {i + 1}
                  </button>
                );
              }
            })}

            {currentPage < maxPages - 4 && maxPages && (
              <>
                <button disabled>...</button>
                <button
                  className={currentPage === maxPages ? "active" : ""}
                  onClick={() => handlePagination(maxPages)}
                >
                  {maxPages}
                </button>
              </>
            )}
          </div>
        )}

        <button disabled={currentPage === maxPages}>next &#10095;</button>
      </List>
    </Wrapper>
  );
};

export default Pagination;
