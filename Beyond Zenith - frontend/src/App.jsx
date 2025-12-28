import './App.css'
import Header from './Header.jsx'
import Portal from './Portal.jsx'
import background from './assets/background.mp4'

function App() {

  return (
    <>
      <video autoPlay loop muted className="background-video">
        <source src={background} type="video/mp4" />
      </video>
      <Header />
      <Portal />
    </>
  )
}

export default App
