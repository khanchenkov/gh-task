import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SortingPanel from "../components/SortingPanel";
import UserCardList from "../components/UserCardList";
import Pagination from "../components/Pagination";
import GithubService from "../service/GithubService";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [resCount, setResCount] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const [username, setUsername] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(1);

  const sortingArr = [
    { id: 1, title: "Best Match", sort: "", order: "" },
    { id: 2, title: "Most repositories", sort: "repositories", order: "desc" },
    { id: 3, title: "Fewest repositories", sort: "repositories", order: "asc" },
  ];

  const formHandler = async (e) => {
    e.preventDefault();
    const sorting = sortingArr.find((el) => el.id === currentSort);
    const { sort, order } = sorting;

    const result = await GithubService.searchUsers(
      username,
      sort,
      order,
      1,
      perPage
    );
    setResCount(result.total_count);
    setUsers(result.items);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const sorting = sortingArr.find((el) => el.id === currentSort);
      const { sort, order } = sorting;

      const result = await GithubService.searchUsers(
        username,
        sort,
        order,
        currentPage,
        perPage
      );
      console.log(result);

      setResCount(result.total_count);
      setUsers(result.items);
    };

    if (username.length > 0) {
      fetchUsers();
    }
  }, [currentSort, currentPage]);

  return (
    <div>
      <SearchBar
        formHandler={formHandler}
        username={username}
        setUsername={setUsername}
      />
      <SortingPanel
        resCount={resCount}
        sortingArr={sortingArr}
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
      />
      <UserCardList users={users} />

      {resCount > perPage && (
        <Pagination
          resCount={resCount}
          perPage={perPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default HomePage;
