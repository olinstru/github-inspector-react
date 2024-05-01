export async function getGithubData(query: string) {
  const response = await fetch("https://api.github.com/" + query, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  })
  return response.json()
}
