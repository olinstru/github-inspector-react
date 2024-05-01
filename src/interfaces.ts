export interface User {
  avatar_url: string
  bio: string
  blog: string
  followers: number
  following: number
  html_url: string
  id: number
  location: string
  login: string
  name: string
  public_repos: number
}

export interface UserRepository {
  id: number
  name: string
  html_url: string
}
