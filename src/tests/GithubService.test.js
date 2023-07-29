import GithubService from "./../service/GithubService";

describe("GitHub service", () => {
  test("getting result", async () => {
    const data = await GithubService.searchUsers("khanchenkov", "", "", 1, 10);
    expect(data).toStrictEqual({
      incomplete_results: false,
      items: [
        {
          avatar_url: "https://avatars.githubusercontent.com/u/57788988?v=4",
          events_url: "https://api.github.com/users/khanchenkov/events{/privacy}",
          followers_url: "https://api.github.com/users/khanchenkov/followers",
          following_url: "https://api.github.com/users/khanchenkov/following{/other_user}",
          gists_url: "https://api.github.com/users/khanchenkov/gists{/gist_id}",
          gravatar_id: "",
          html_url: "https://github.com/khanchenkov",
          id: 57788988,
          login: "khanchenkov",
          node_id: "MDQ6VXNlcjU3Nzg4OTg4",
          organizations_url: "https://api.github.com/users/khanchenkov/orgs",
          received_events_url: "https://api.github.com/users/khanchenkov/received_events",
          repos_url: "https://api.github.com/users/khanchenkov/repos",
          score: 1,
          site_admin: false,
          starred_url: "https://api.github.com/users/khanchenkov/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/khanchenkov/subscriptions",
          type: "User",
          url: "https://api.github.com/users/khanchenkov",
        },
      ],
      total_count: 1,
    });
  });
});
