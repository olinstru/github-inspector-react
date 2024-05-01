import { User } from "../interfaces"

interface SearchResultsProps {
  users: User[]
  totalUsers: number
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function SearchResults({
  users,
  totalUsers,
  onClick,
}: SearchResultsProps) {
  if (users.length === 0) {
    return null
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="my-4 text-left">
          Users displayed: {users.length} out of {totalUsers}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
          {users.map((user: User) => (
            <div
              key={user.id}
              onClick={onClick}
              data-id={user.login}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="h-40 flex justify-center items-center">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">@{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 block mb-2"
                >
                  {user.html_url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
