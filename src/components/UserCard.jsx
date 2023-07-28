import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #5c656d;
  border-radius: 5px;
  display: flex;
  padding: 10px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

const Name = styled.p`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const UserCard = ({ login, avatar, url }) => {
  return (
    <Card>
      <Link to={`user/${login}`}>
        <Image src={avatar} alt={login} />
      </Link>
      <Name>
        <Link to={`user/${login}`}>{login}</Link>
      </Name>
    </Card>
  );
};

export default UserCard;
