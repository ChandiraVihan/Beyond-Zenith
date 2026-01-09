import { useState } from 'react'
import bg2 from './assets/bg2.mp4'
import bg4 from './assets/bg4.mp4'
import bg6 from './assets/bg6.mp4'
import bg7 from './assets/bg7.mp4'
import bg10 from './assets/bg10.mp4'
import bg13 from './assets/bg13.mp4'

/* To do removing potential repeat*/


import './Background.css'
function Background(){

    const backgrounds = [bg2, bg4,bg6, bg7, bg10, bg13]

    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * backgrounds.length))

    const loop =() => setCurrentIndex((currentIndex + 1) % backgrounds.length)


    return (
    <video
    key={currentIndex} 
    autoPlay muted className="bg-video"
    onEnded={loop}
    src={backgrounds[currentIndex]} 
    >
      </video>
    )
}

export default Background;