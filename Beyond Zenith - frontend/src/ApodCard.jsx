import './ApodCard.css'

function ApodCard(props) {

  const pathData = "M 20,0 L 340,0 A 20,20 0 0 1 360,20 L 360,310 A 15,15 0 0 1 345,325 L 210,325 C 190,325 190,365 160,365 L 20,365 A 20,20 0 0 1 0,345 L 0,20 A 20,20 0 0 1 20,0 Z";

  return (
    <div className="pic-container">
      <svg 
        className="svg-card"
        width="360" 
        height="365" 
        viewBox="0 0 360 365" 
      >
        <defs>
          <clipPath id="cardClip">
            <path d={pathData} />
          </clipPath>
        </defs>

        {/* The Image */}
        <image 
          href={props.testImages} 
          width="100%" 
          height="100%" 
          clipPath="url(#cardClip)" 
          preserveAspectRatio="xMidYMid slice"
        />

        {/* The Border */}
        <path 
          className="svg-border" 
          d={pathData} 
        />
      </svg>
      <span className="card-title">{props.title}</span>
    </div>
  )
}

export default ApodCard