import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import Background from './Background.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import TimeLineView from './TimeLineView.jsx'
import Apod from './ApodDetails.jsx'
import ScrollBar from './CustomScrollBar.jsx'

function App() {


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
    },

    {
      path: '/timeline',
      element: (
        <>
      <Background />
      <Header />
      <TimeLineView />
      </>
      ),
    },

    {
      path: '/apod',
      element: (
        <>
      <Background />
      <Header />
      <Apod />
      </>
      ),
    },

    {
      path: '/live',
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
  
    <ScrollBar>
     <RouterProvider router={router} />
    </ScrollBar>

  );
}

export default App
