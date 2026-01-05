import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import Background from './Background.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

function App() {

  const portalOn = false

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
      <Background />
      <Header />
      <Home />
      </>
      ),
    },

    {
      path: '/login',
      element: (
        <>
      <Background />
      <Header />
      <Login />
      </>
      ),
    },

     {
      path: '/register',
      element: (
        <>
      <Background />
      <Header />
      <Register />
      </>
      ),
    },

    {
      path: '/profile',
      element: (
        <>
      <Background />
      <Header />
      </>
      ),
    }
  ]
  )

  return (
    // <>
    //   <Background />
    //   <Header />
    //   <Home />
    //  {portalOn && <Portal />}
    // </>
     <RouterProvider router={router} />
  )
}

export default App
