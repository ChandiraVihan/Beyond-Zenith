import { useState, useEffect } from 'react'
import './Header.css'
import { Rocket, Satellite, Globe, Radio, ChevronRight, Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import titleLogo from './assets/title.svg'
import Portal from './Portal.jsx';


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

    function  handleTag1(){
        navigate('/timeline');
    }

    function  handleTag2(){
        navigate('/apod');
    }


const TitleLogo = ({ onClick }) => {
    return (   
        <img src={titleLogo} alt="Beyond Zenith Logo" className="title-logo-image" onClick={onClick} style={{ cursor: 'pointer' }}/>
    );
}

    function handleMouseEnter(){
        < Portal />
    }

    function handleMouseLeave(){
        //
    }

    function hoverTest(){
        console.log("hovered");
    }

    return (
        <>
        <header>
            <nav>
            <div className="title-logo">                             
            <TitleLogo onClick={handleLogo}/>
            </div>
            <div>
             <span className="tags">
               <a className="tag1" onClick={handleTag1}
               onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                🎂 Cosmic Timeline Explorer</a> 
               <a className="tag2" onClick={handleTag2}>🖼️ APOD Gallery </a>
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