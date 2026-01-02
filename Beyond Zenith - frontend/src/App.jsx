import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import Background from './Background.jsx'
import Home from './Home.jsx'

function App() {

  const portalOn = false

  return (
    <>
      <Background />
      <Header />
      <Home />
     {portalOn && <Portal />}
    </>
  )
}

export default App
