/*
Main Interface for LoginPage Site
*/

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
       <button className="social-button">
        <img src="google.svg" alt="Google" className="social-icon" />
        Google
        </button>

       <button className="social-button">
        <img src="facebook.svg" alt="Facebook" className="social-icon" />
        Facebook
        </button>

        <button className="social-button">
        <img src="apple.svg" alt="Apple" className="social-icon" />
        Apple
        </button>

     </div>

     <p className="seperator"><span>or</span></p>

     <form action="#" className="login-form">
      <div className="input-wrapper">
        <input type="email" placeholder="Email address" 
        className="input-field" required  />

      <i class="material-symbols-outlined">mail</i>
       </div>

      

      <div className="input-wrapper">
        <input type="password" placeholder="Password" 
        className="input-field" required />
      
         <i class="material-symbols-outlined">lock</i>
           
         
      </div>
       <a href="#" className="forgot-pass-link">Forgot Password?</a>
       <button className="login-button">Log In</button>
     </form>

     <p className="signup-text">Don&apos;t have an account?<a href="#">Signup now</a></p>
    </div>
  )
}

export default App