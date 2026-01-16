import './ApodCard.css'

 function ApodCard(props) {

  return (
    <div className="pic-container">
    <div className="picture">
    <img src={props.testImages} alt="Astronomy Picture of the Day" className="apod-image"/>
    </div>
    </div>
  )
}

export  default ApodCard