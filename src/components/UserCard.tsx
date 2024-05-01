import { User, UserRepository } from "../interfaces"

interface selectedUserProps {
  user: User
  userRepositories: []
}

export default function UserCard({
  user,
  userRepositories,
}: selectedUserProps) {
  if (!user.login) {
    return null
  }
  return (
    <>
      <div className="w-3xl">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto mt-6"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name}
            </h1>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 block mb-2"
            >
              @{user.login}
            </a>
            <p className="text-gray-700 mb-4">{user.bio}</p>
            {user.blog && (
              <a
                href={user.blog}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 block mb-4"
              >
                {user.blog}
              </a>
            )}
            <p className="text-gray-700 mb-2">
              📍{user.location ? user.location : "Somewhere in the world..."}
            </p>
            <div className="flex items-center text-gray-700 mb-4">
              <span className="mr-4">Followers: {user.followers}</span>
              <span>Following: {user.following}</span>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Repositories ({user.public_repos})
            </h2>
            {userRepositories.map((repo: UserRepository) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="block hover:bg-gray-100 transition duration-300 ease-in-out py-2 px-4 rounded-md mb-2"
              >
                {repo.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
