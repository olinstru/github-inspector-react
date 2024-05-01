import "./App.css"
import { useState } from "react"
import { getGithubData } from "./utils/api"
import { User } from "./interfaces"
import SearchForm from "./components/SearchForm"
import UserCard from "./components/UserCard"
import SearchResults from "./components/SearchResults"

function App() {
  const [users, setUsers] = useState([] as [])
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [selectedUser, setSelectedUser] = useState([] as [])

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
    const userRepository = await getGithubData(`users/${username}/repos`)
    setSelectedUser(user)
    console.log(userRepository, user)
  }

  function handleFormSubmit(value: string) {
    if (value) {
      fetchUsers(value)
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold">GitHub Search 🔍</h1>
      <SearchForm onSubmit={handleFormSubmit} />

      {/* <UserCard user={users} /> */}

      <SearchResults
        users={users}
        totalUsers={totalUsers}
        onClick={fetchSelectedUser}
      />
    </>
  )
}

export default App
