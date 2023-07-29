import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import GithubService from "../service/GithubService";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid #5c656d;
  padding: 40px 20px;
`;

const BackButton = styled.div`
  margin-bottom: 50px;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-right: 150px;
  }
`;

const Username = styled.p`
  margin-bottom: 50px;
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await GithubService.getUserByLogin(username);
      setUserData(user);
    };

    fetchUser();
  }, [username]);

  return (
    <div>
      <BackButton>
        <Link to="/">Back</Link>
      </BackButton>

      <Wrapper>
        {userData && (
          <UserInfo>
            <img src={userData.avatar_url} alt="" />
            <div>
              <Username>
                <Link to={userData.html_url}>{userData.login}</Link>
              </Username>
              <p>Name: {userData.name}</p>
              <p>Public repositories: {userData.public_repos}</p>
              <p>Followers: {userData.followers}</p>
              <p>Following: {userData.following}</p>
            </div>
          </UserInfo>
        )}
      </Wrapper>
    </div>
  );
};

export default UserPage;
