import React from 'react'
import './signup.css';
// note: add password and password2 check here
  const Signup = (props) => {
    return (
      <form onSubmit={e => props.submitCredentials(e)} id="login-box">
        <div class="left" >
          <h1>Sign up</h1>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password2" placeholder="Retype password" />
          <input type="submit" name="signup_submit" value="Sign me up" />
        </div>
      </form>
    )
  }

export default Signup;
