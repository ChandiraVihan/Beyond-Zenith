import './ApodCard.css'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im4 from './assets/im4.jpg'

 function ApodCard(props) {

  props = {
    children: [im4]
  }

  return (
    <div className="pic-container">
    <img src={props.children} alt="Astronomy Picture of the Day" className="apod-image"/>
    </div>
  )
}

export  default ApodCard