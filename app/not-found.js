export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="mb-6">Page not found.</p>

      <a
        href="/"
        className="bg-emerald-500 text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </a>
    </div>
  )
}