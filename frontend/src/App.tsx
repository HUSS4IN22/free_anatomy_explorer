import { Button } from '@/components/ui/button.tsx'
import { Navbar } from '@/components/ui/Nav-bar.tsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="font-patrick text-3xl">Anatomy Explorer App</div>
      <Button>Click me!</Button>
    </>
  )
}

export default App
