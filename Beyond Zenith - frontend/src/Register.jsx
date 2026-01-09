import './Register.css'


function Register(){

  return (
    <main className="register-container">
      <div className="register-card">
      
        <h1>Registration</h1>
        
        <div className="form-wrapper">
          <form>
            <div className="input-group-reg">
               <span className="mail-icon">
              <ion-icon name="mail"></ion-icon>
            </span>
          <input type="email" required></input>
          <label>Email :</label>
              </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register