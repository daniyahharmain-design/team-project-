import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Before from './Components/Before.jsx'
import UserRegister from './Components/UserRegister.jsx'

const routList = createBrowserRouter([
  {
    path: "/",
    element: <Before />
  },
  {
    path: "/user",
    element: <UserRegister />
  }
])

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App/>
  </StrictMode>,
)
