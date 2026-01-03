import { useEffect, useState } from 'react'
import './Home.css'
import { fetchSpaceText } from "./spaceFact";




function Home(){

    
const [fact, setFact] = useState(() => {
    return sessionStorage.getItem("spaceFact") || "";
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (fact) return;

    fetchSpaceText()
      .then(text => {
        setFact(text);
        sessionStorage.setItem("spaceFact", text);
      })
      .catch(() =>
        setError("Unable to load space fact at the moment.")
      );
  }, [fact]);

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

    return  (
    <>
    <div className="Poster">
  <div className="ribbon-container">
  {/* The SVG acts as the background and the border animation */}
  <svg 
    className="ribbon-svg" 
    viewBox="0 0 300 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Define the gradient for the glowing line */}
      <linearGradient id="comet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0055ff" stopOpacity="0" />
        <stop offset="100%" stopColor="#00D9FF" stopOpacity="1" />
      </linearGradient>
      
      {/* Your exact path definition */}
      <path id="ribbon-path" d="M 0 50 A 50 50 0 0 1 50 0 L 300 0 C 275 0 275 50 250 50 L 50 50 A 50 50 0 0 0 0 100 Z" />
    </defs>

    {/* Layer 1: The Glass Background */}
    <use href="#ribbon-path" className="ribbon-bg" />

    {/* Layer 2: The Moving Border (The Comet) */}
    <use href="#ribbon-path" className="ribbon-border" />
  </svg>

  {/* The Text content sits on top */}
  <div className="ribbon-content">
    Now Showing
  </div>
</div>
    <div className="card"
    style={{
          backgroundImage: `url(${featured.url})`,
        }}
    >
    </div>
    </div>
      <div className="spaceFact">
      {error && <p>{error}</p>}
      {!error && <p>{fact || "Loading…"}</p>}
    </div>
    </>
    ) 
}

export default Home;