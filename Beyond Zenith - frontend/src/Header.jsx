import './Header.css'
import logo from './assets/logo1.png'

function header(){

    function handleClick(){
        console.log("Login Clicked")
    }

    function handleLogo(){
        console.log("clicked")
    }

    return (
        <>
        <header>
            <nav> 
            <img className="logo" src={logo}/>
            <span onClick={handleLogo}>Beyond Zenith</span>
            <div>
            <button onClick={handleClick}>LOGIN {'>'}</button>
            </div>
            </nav>
        </header>
        </>
                )
}

export default header;