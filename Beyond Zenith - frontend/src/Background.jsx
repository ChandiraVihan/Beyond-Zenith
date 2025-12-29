import { useState } from 'react'
import bg1 from './assets/bg1.mp4'
import bg2 from './assets/bg2.mp4'
import './Background.css'
function Background(){

    const backgrounds = [bg1]

    const [currentBg, setCurrentBg] = useState(undefined)

    return (
    <video autoPlay loop muted className="bg-video">
        <source src={backgrounds} type="video/mp4" />
      </video>
    )
}

export default Background;