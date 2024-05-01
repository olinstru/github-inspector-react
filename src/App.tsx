import "./App.css"
import { useState } from "react"
import { getGithubData } from "./utils/api"
import SearchForm from "./components/SearchForm"
import SearchResults from "./components/SearchResults"

function App() {
  const [users, setUsers] = useState([] as [])
  const [totalUsers, setTotalUsers] = useState<number>(0)
  // const [selectedUser, setSelectedUser] = useState([] as [])

  async function searchUserGithub(username: string) {
    const data = await getGithubData(`search/users?q=${username}`)
    setUsers(data.items)
    setTotalUsers(data.total_count)
  }

  function handleFormSubmit(value: string) {
    if (value) {
      searchUserGithub(value)
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold">GitHub Search 🔍</h1>
      <SearchForm onSubmit={handleFormSubmit} />

      <SearchResults users={users} totalUsers={totalUsers} />
    </>
  )
}

export default App
