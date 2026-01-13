import { useState, useEffect } from 'react'
import './Header.css'
import logo from './assets/logo1.png'
import { Rocket, Satellite, Globe, Radio, ChevronRight, Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function header(){

     const navigate = useNavigate();

     const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Initial check
        handleStorageChange();

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    function handleClick(){
        navigate('/login');
    }

    function handleLogo(){
        navigate('/');
    }

    function  handleClickAvatar(){
        navigate('/profile');
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
            <img className="logo" src={logo} onClick={handleLogo}/>
            <span className="title" onClick={handleLogo} style={asciiStyle}>
             BEYOND <br></br>
             ZENITH
            </span>
            </div>
            <div>
             <span className="tags">
               <a>🎂 Cosmic Timeline Explorer</a> 
               <a>🖼️ APOD Gallery </a>
               <a>📡 Live Space Dashboard</a>
               <a>🌌 NEO Tracker</a>
               <a>🔴 Mars Rover Gallery</a>
            </span>
            </div>
            <div className="btn-container">
            {isLoggedIn ? <div className="avatar" onClick={handleClickAvatar}></div> : <button className="logButton" onClick={handleClick}>LOGIN <ChevronRight size={20} /></button>}
            </div>
            </nav>
        </header>
        </>
                )
}

export default header