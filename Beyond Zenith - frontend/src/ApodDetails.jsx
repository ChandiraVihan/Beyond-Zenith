import './ApodDetails.css'
import  ApodCard from './ApodCard.jsx'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im4 from './assets/im4.jpg'
import im5 from './assets/im5.jpg'
import im6 from './assets/im6.jpg'
import im7 from './assets/im7.jpg'
import im8 from './assets/im8.jpg'
import im9 from './assets/im9.jpg'

function Apod() {

    const testImages = [im1, im2, im4, im5, im6, im7, im8, im9];

    const finalImages = testImages.map((img, index) => (
        <ApodCard key={index} testImages={img} />
    ));

    return (
        <div className="apod-view">
            {finalImages}  
            
            </div>
    )
}

export default Apod;