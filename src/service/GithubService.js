export default class GithubService {
  static async searchUsers(login, sort, order) {
    const loginQuery = `?q=${login}`;
    const sortQuery = sort ? `&sort=${sort}` : "";
    const orderQuery = sort && order ? `&order=${order}` : "";

    try {
      const response = await fetch(
        `https://api.github.com/search/users${loginQuery}${sortQuery}${orderQuery}`
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
