import React from "react";
import UserCard from "../components/UserCard";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserCardList = ({ users }) => {
  return (
    <List>
      {users &&
        users.map(({ id, login, avatar_url, html_url }) => (
          <li key={id}>
            <UserCard login={login} url={html_url} avatar={avatar_url} />
          </li>
        ))}
    </List>
  );
};

export default UserCardList;
