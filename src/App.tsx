import Navbar from "./blocks/Navbar"
import MainSearch from "./blocks/MainSearch"
import RecentSearches from "./blocks/RecentSearches"

function App() {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: '#fff9f5',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,220,190,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,245,238,0.5) 0%, transparent 50%),
            radial-gradient(circle, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px',
          zIndex: -1
        }}
      />
      <Navbar />
      <MainSearch />
      <RecentSearches />
    </div>
  )
}

export default App
