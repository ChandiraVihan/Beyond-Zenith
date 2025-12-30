import React, { useMemo } from 'react'
import './Portal.css'

function portal(props) {

  const sparks = useMemo(() => {

    const sparkArray = [];

    for (let i = 0; i < 720; i++) {

      const rotate = i * 2;
      const stretch = Math.random() * (114 - 100) + 100;

      sparkArray.push({
        id: i,

        style: {
          rotate: `${rotate}deg`,
          transform: `translate(${stretch}px)`
        }
      });
    }
    return sparkArray;
  },[]);
  
  return (
    <div className="portal-container">
    <div id="portal-wrapper">
    <div className="glow-ring"></div>
      {sparks.map((spark) => (
        <div
        key={spark.id}
        className="spark"
        style={spark.style}
        />
      ))}
    </div>
    </div>
  );
}

export default portal;