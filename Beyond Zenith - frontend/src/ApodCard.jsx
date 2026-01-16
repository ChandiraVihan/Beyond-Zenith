import './ApodCard.css'

 function ApodCard(props) {

  return (
    <div className="pic-container">
    <img src={props.testImages} alt="Astronomy Picture of the Day" className="apod-image"/>
    </div>
  )
}

export  default ApodCard