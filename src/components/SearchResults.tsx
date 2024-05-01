import { User, UserList } from "../interfaces"

export default function SearchResults({ users, totalUsers }: UserList) {
  if (users.length === 0) {
    return <p>No users found</p>
  }
  return (
    <>
      <div>Users found: {totalUsers}</div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {users.map((user: User) => (
          <div key={user.id} className="bg-gray-100 p-4 rounded-md">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full"
            />
            <h2 className="text-xl font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              {user.html_url}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
