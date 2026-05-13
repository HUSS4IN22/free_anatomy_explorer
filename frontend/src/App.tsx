import { BrowserRouter, Routes, Route } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Navbar from "./blocks/Navbar"
import Home from "./pages/Home"
import Result from "./pages/Result"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/structure/:id" element={<Result />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
