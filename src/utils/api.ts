export async function getGithubData(url: string) {
  const response = await fetch("https://api.github.com/" + url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  })
  return response.json()
}
