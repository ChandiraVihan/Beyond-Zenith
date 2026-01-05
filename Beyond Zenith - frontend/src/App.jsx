import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import Background from './Background.jsx'
import Home from './Home.jsx'

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
      </>
      ),
    },

     {
      path: '/register',
      element: (
        <>
      <Background />
      <Header />
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
