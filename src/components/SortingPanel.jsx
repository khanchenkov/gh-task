import React, { useState } from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Result = styled.div`
  font-weight: bold;
`;

const SortBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #20262c;
  border: 1px solid #5c656d;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.2s;
  padding: 5px 10px;
  width: 230px;
  span {
    font-weight: normal;
    color: #aaa;
    margin-right: 5px;
  }
  div {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #ffffff transparent transparent transparent;
  }
  &:hover {
    background-color: #5c656d;
    border: 1px solid white;
  }
`;

const Modal = styled.div`
  margin-top: 10px;
  position: absolute;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #2a2f38;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #494e52;
  li {
    cursor: pointer;
  }
  li label {
    display: flex;
    cursor: pointer;
  }
`;

const SortingPanel = ({
  resCount,
  sortingArr,
  currentSort,
  setCurrentSort,
}) => {
  const [isShown, setIsShown] = useState(false);

  const sortHandler = (id) => {
    setIsShown(false);
    setCurrentSort(id);
  };

  return (
    <Panel>
      <Result>
        {resCount ?? 0} {resCount === 1 ? "result" : "results"}
      </Result>
      <div>
        <SortBtn onClick={() => setIsShown(!isShown)}>
          <span>Sort by:</span>
          {sortingArr.find((el) => el.id === currentSort).title}
          <div></div>
        </SortBtn>
        {isShown && (
          <Modal>
            <List>
              {sortingArr.map(({ id, title }) => (
                <li key={id}>
                  <label onChange={() => sortHandler(id)}>
                    <input
                      type="radio"
                      name="sort"
                      checked={currentSort === id}
                    />
                    <div>{title}</div>
                  </label>
                </li>
              ))}
            </List>
          </Modal>
        )}
      </div>
    </Panel>
  );
};

export default SortingPanel;
