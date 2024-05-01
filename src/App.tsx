import "./App.css"
import { useState } from "react"
import { getGithubData } from "./utils/api"
import { User } from "./interfaces"
import SearchForm from "./components/SearchForm"
import UserCard from "./components/UserCard"
import SearchResults from "./components/SearchResults"
import { Header } from "./components/Header"

export default function App() {
  const [users, setUsers] = useState([] as [])
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [selectedUser, setSelectedUser] = useState<User>({} as User)
  const [selectedUserRepositories, setSelectedUserRepositories] = useState(
    [] as []
  )

  async function fetchUsers(username: string) {
    const users = await getGithubData(`search/users?q=${username}`)
    setUsers(users.items)
    setTotalUsers(users.total_count)
  }

  async function fetchSelectedUser(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const username = event.currentTarget.dataset.id
    const user = await getGithubData(`users/${username}`)
    const userRepositories = await getGithubData(`users/${username}/repos`)
    setSelectedUser(user)
    setSelectedUserRepositories(userRepositories)
  }

  function handleFormSubmit(value: string) {
    if (value) {
      fetchUsers(value)
    }
  }

  return (
    <>
      <Header />

      <SearchForm onSubmit={handleFormSubmit} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <SearchResults
              users={users}
              totalUsers={totalUsers}
              onClick={fetchSelectedUser}
            />
          </div>
          <div className="lg:w-1/3">
            <UserCard
              user={selectedUser}
              userRepositories={selectedUserRepositories}
            />
          </div>
        </div>
      </div>
    </>
  )
}
