import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login(){
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
}

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/accounts/api/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.key); 
            console.log("Login successful!");
            navigate('/');

        } else {
            console.error("Login failed:", data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
  }


  return (
    <main className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
          <div className="input-group-email">
            <span className="mail-icon">
              <ion-icon name="mail"></ion-icon>
            </span>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}/>
          <label>Email :</label>
          </div>
          <div className="input-group-password">
            <span className="pass-icon">
              <ion-icon name="lock"></ion-icon>
            </span>
          <input type="password" name="password" required value={formData.password} onChange={handleChange}/>
          <label>Password :</label>
          </div>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="login-register">
            <p>Don't have an account? <a href="/register" className="register-link">Register</a></p>
          </div>
          </form>
        </div>
      </div>
    </main>
  )
}


export default Login