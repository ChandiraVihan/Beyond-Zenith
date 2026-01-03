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
    <div className="Cardtitle">
    <span>Now Showing</span>
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