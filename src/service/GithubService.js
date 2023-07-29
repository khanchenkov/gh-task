export default class GithubService {
  static async searchUsers(login, sort, order, page, perPage) {
    const loginQuery = `?q=${login}`;
    const sortQuery = sort ? `&sort=${sort}` : "";
    const orderQuery = sort && order ? `&order=${order}` : "";
    const pageQuery = `&page=${page}`;
    const perPageQuery = `&per_page=${perPage}`;

    try {
      const response = await fetch(
        `https://api.github.com/search/users${loginQuery}${sortQuery}${orderQuery}${pageQuery}${perPageQuery}`
      );
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }

  static async getUserByLogin(login) {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
