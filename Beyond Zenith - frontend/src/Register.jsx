import { useState } from 'react';
import './Register.css'


function Register(){

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password1 !== formData.password2) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/accounts/api/auth/registration/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password1: formData.password1,
          password2: formData.password2,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful!");
        // Optionally, redirect to login page
        // window.location.href = '/login';
      } else {
        console.error("Registration failed:", data);
        // You can display these errors to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="register-container">
      <div className="register-card">
      
        <h1>Registration</h1>
        
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="reg-grid">
            <div className="reg-username">
               <span className="reg-mail-icon">
              <ion-icon name="person-add"></ion-icon>
            </span>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          <label>Username :</label>
          </div>
           <div className="reg-pass">
               <span className="reg-pass-icon">
              <ion-icon name="lock"></ion-icon>
            </span>
          <input type="password" name="password1" value={formData.password1} onChange={handleChange} required />
          <label>Password :</label>
          </div>
            <div className="reg-email">
               <span className="reg-mail-icon">
              <ion-icon name="mail"></ion-icon>
            </span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Email :</label>
              </div>
              <div className="reg-confirm-pass">
               <span className="reg-pass-icon">
              <ion-icon name="checkmark-circle"></ion-icon>
            </span>
          <input type="password" name="password2" value={formData.password2} onChange={handleChange} required />
          <label>Confirm Password :</label>
          </div>
          </div>
            <button className="register-button" type="submit">Register</button>
          <div className="register-login">
            <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
          </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register;