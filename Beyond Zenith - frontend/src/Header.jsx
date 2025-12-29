import './Header.css'

function header(){

    function handleClick(){
        console.log("Login Clicked")
    }

    return (
        <>
        <header>
            <nav> 
            <h1>Beyond Zenith</h1>
            <div>
            <button onClick={handleClick}>LOGIN {'>'}</button>
            </div>
            </nav>
        </header>
        </>
                )
}

export default header;