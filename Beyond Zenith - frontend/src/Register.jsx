import './Register.css'


function Register(){

  return (
    <main className="register-container">
      <div className="register-card">
      
        <h1>Registration</h1>
        
        <div className="form-wrapper">
          <form>
            <div className="reg-grid">
            <div className="reg-username">
               <span className="reg-mail-icon">
              <ion-icon name="person-add"></ion-icon>
            </span>
          <input type="text" required></input>
          <label>Username :</label>
          </div>
           <div className="reg-pass">
               <span className="reg-pass-icon">
              <ion-icon name="lock"></ion-icon>
            </span>
          <input type="password" required></input>
          <label>Password :</label>
          </div>
            <div className="reg-email">
               <span className="reg-mail-icon">
              <ion-icon name="mail"></ion-icon>
            </span>
          <input type="email" required></input>
          <label>Email :</label>
              </div>
              <div className="reg-confirm-pass">
               <span className="reg-pass-icon">
              <ion-icon name="checkmark-circle"></ion-icon>
            </span>
          <input type="password" required></input>
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

export default Register