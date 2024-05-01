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
      <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-8 max-w-xl">
        <div className="flex items-center justify-between">
          <input
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-purple-600 focus:outline-none focus:ring focus:ring-purple-400"
            type="text"
            placeholder="Type a name here"
            name="search"
            required
          />
          <button
            type="submit"
            className="ml-4 px-5 py-3 text-white bg-purple-600 rounded-md shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400"
          >
            Search
          </button>
        </div>
      </form>
    </>
  )
}
