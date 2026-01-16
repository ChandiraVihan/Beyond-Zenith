import './ApodDetails.css'
import  ApodCard from './ApodCard.jsx'
import im4 from './assets/im4.jpg'

function Apod() {

    const testImages = [im4];

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