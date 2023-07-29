import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  background-color: #010508;
  display: flex;
  margin-bottom: 10px;
  input {
    width: 100%;
    background-color: #0c1017;
    border: 1px solid #5c656d;
    border-radius: 5px;
    height: 35px;
    margin-right: 15px;
    color: #fff;
    font-size: 14px;
    padding-left: 10px;
  }
  button {
    background-color: #20262c;
    border: 1px solid #5c656d;
    color: #c1d1d9;
    font-weight: bold;
    font-size: 14px;
    border-radius: 5px;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background-color: #5c656d;
      border: 1px solid #20262c;
    }
  }
`;

const SearchBar = ({ username, setUsername, formHandler }) => {
  return (
    <SearchForm onSubmit={(e) => formHandler(e)}>
      <input
        data-testid="search-bar"
        type="text"
        placeholder="Search repos"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default SearchBar;
