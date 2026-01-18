import { useEffect, useState } from 'react'
import './Home.css'
import  SpaceFacts  from "./spaceFact";
import openQuote from './assets/openQuote.svg'
import closeQuote from './assets/closeQuote.svg'



function Home(){


    const MOCK_API_FEED = [
  {
    id: 1,
    title: "Milky Way Core",
    type: "Deep Space",
    url: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=2069&auto=format&fit=crop",
    description: "Long exposure telemetry from Hubble Deep Field sector 7G."
  },
  {
    id: 2,
    title: "Orbital Station Alpha",
    type: "Live Feed",
    url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
    description: "Current ISS trajectory holding steady over the Pacific."
  },
  {
    id: 3,
    title: "Event Horizon Proxy",
    type: "Simulation",
    url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2111&auto=format&fit=crop",
    description: "Rendering gravitational lensing effects of Sagittarius A*."
  },
  {
    id: 4,
    title: "Lunar Surface",
    type: "Rover Cam",
    url: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1973&auto=format&fit=crop",
    description: "High-contrast mapping of the Tycho crater rim."
  }
];

    const featured = MOCK_API_FEED[0]
    const index = Math.floor(Math.random() * SpaceFacts.length);


    return  (
    <>
    <div className="Poster">
    <div className="label-pill">
    <span>Now Showing</span>
    </div>
    <div className="label-bottom">Source</div>
    <div className="card"
    style={{
          backgroundImage: `url(${featured.url})`,
        }}
    >
    </div>
    </div>
    <div className="welcomeText-container">
      <h1 className="welcomeText">Welcome to Beyond Zenith</h1>
    </div>
      <div className="spaceFact">
        <img className="open-quote" src={openQuote} />
      {SpaceFacts[index]}
        <img className="close-quote" src={closeQuote} />
    </div>
    </>
    ) 
}

export default Home;