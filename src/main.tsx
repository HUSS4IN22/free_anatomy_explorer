import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router' <- Declarative React Router
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import { store } from '@/store/store.ts'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/secondpage",
    element: <div>Second Page!</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
