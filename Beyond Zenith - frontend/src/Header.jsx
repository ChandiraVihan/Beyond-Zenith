import './Header.css'

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
            <h1 onClick={handleLogo}>Beyond Zenith</h1>
            <div>
            <button onClick={handleClick}>LOGIN {'>'}</button>
            </div>
            </nav>
        </header>
        </>
                )
}

export default header;