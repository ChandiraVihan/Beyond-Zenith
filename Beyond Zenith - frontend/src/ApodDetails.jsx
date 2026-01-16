import './ApodDetails.css'
import  ApodCard from './ApodCard.jsx'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'  
import im4 from './assets/im4.jpg'

function Apod() {

    const testImages = [im1, im2, im3, im4];

    return (
        <div className="apod-view">
            <h1>APOD Gallery</h1>  
            <ApodCard testImages={testImages} /> 
            </div>
    )
}

export default Apod;