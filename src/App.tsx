import "./App.css"
import SearchForm from "./components/SearchForm"

function App() {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Github Search 🔍</h1>

      <SearchForm onSubmit={handleFormSubmit} />
    </>
  )
}

export default App
