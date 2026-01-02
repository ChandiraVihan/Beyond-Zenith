import './Header.css'
import logo from './assets/logo1.png'
import { Rocket, Satellite, Globe, Radio, ChevronRight, Play, Info } from 'lucide-react';


function header(){

    function handleClick(){
        console.log("Login Clicked")
    }

    function handleLogo(){
        console.log("clicked")
    }

    const asciiStyle = {
        fontFamily: '"Bungee Shade", cursive',
        color: '#00D9FF', // 
        fontSize: '54px',
        textAlign: 'center',
        lineHeight: '1',
        textShadow: '0 0 10px #00D9FF' 
    };

    return (
        <>
        <header>
            <nav>
            <div className="title-logo">
            <img className="logo" src={logo}/>
            <span className="title" onClick={handleLogo} style={asciiStyle}>
             BEYOND <br></br>
             ZENITH
            </span>
            </div>
            <div>            <span className="tags">
               <a>Mission</a> 
               <a>Vision</a>
            </span>
            </div>
            <div className="btn-container">
            <button className="logButton" onClick={handleClick}>LOGIN <ChevronRight size={20} /></button>
            </div>
            </nav>
        </header>
        </>
                )
}

export default header;