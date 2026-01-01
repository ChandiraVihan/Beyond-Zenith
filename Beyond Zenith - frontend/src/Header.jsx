import './Header.css'
import logo from './assets/logo1.png'

function header(){

    function handleClick(){
        console.log("Login Clicked")
    }

    function handleLogo(){
        console.log("clicked")
    }

    // React Component Style Object or CSS class
    const hackerTitleStyle = {
        fontFamily: '"VT323", monospace', // Import this font first
        fontSize: '48px',
        color: '#00D9FF', // Cyan Text
        textShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF, 0 0 20px #0A0E27', // The Neon Glow
        letterSpacing: '4px',
        textTransform: 'uppercase'
    };

    return (
        <>
        <header>
            <nav> 
            <img className="logo" src={logo}/>
            <span className="title" onClick={handleLogo} style={hackerTitleStyle}>
             BEYOND <br></br>
            ZENITH
            </span>
            <div>
            <button onClick={handleClick}>LOGIN {'>'}</button>
            </div>
            </nav>
        </header>
        </>
                )
}

export default header;