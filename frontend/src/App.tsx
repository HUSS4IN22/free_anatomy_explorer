import Navbar from "./blocks/Navbar"
import MainSearch from "./blocks/MainSearch"

function App() {
  return (
    <>
      <div className="relative min-h-screen w-full bg-slate-50 bg-dot-grid">
        <Navbar />
        <MainSearch />
      </div>
    </>
  )
}

export default App
