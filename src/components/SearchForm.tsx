export interface SearchFormProps {
  onSubmit: (username: string) => void
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = (event.target as HTMLFormElement).search.value
    onSubmit(value)
    event.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="block rounded-md border p-1.5 text-gray-900 "
          type="text"
          placeholder="Type a name here"
          name="search"
          required
        />
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Search
        </button>
      </form>
    </>
  )
}
