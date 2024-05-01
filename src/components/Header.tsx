export function Header() {
  return (
    <header>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <a href="/">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                GitHub Search 🔍
              </h1>
            </a>
            <p className="mt-1.5 text-sm text-gray-500">
              Search for any user using the official GitHub API! 🎉
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
