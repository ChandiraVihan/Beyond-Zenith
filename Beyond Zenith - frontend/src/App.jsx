import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import Background from './Background.jsx'

function App() {

  const portalOn = false

  return (
    <>
      <Background />
      <Header />
     if{ portalOn === true
      ? <Portal /> : undefined }
    </>
  )
}

export default App
