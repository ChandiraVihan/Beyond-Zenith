import './login.css'

const login = async (email, password) => {
    try{
        const response = await fetch('BACKEND_URL/accounts/api/auth',
            {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            }
        );

        const data = await response.json();

        if(response.ok) {
            
 // Save the token to use for future requests
      localStorage.setItem('token', data.token);
      console.log("Login successful! Token saved.");
    } else {
      console.error("Login failed:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }      
};

function Login(){

  return (
    <main className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <div className="login-box">
        <form action="#">
          <div>
          <input type="email" required></input>
          <label>Email</label>
          </div>
          <div>
          <input type="password" required></input>
          <label>Password</label>
          </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login