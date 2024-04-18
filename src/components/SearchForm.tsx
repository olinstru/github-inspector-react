export interface SearchFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = (event.target as HTMLFormElement).search.value
    console.log(value)
    event.currentTarget.reset()
    onSubmit(event)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="block rounded-md border p-1.5 text-gray-900 "
          type="text"
          placeholder="Type a name here"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
}
