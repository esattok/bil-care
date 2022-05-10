import logo from './logo.svg';
import './App.css';

function Login() {
  return (
      <div class="loginOuter">
          <div class ="loginWelcome">
              <h2>
                  Welcome to Bilkent University Health Center WebSite
              </h2>
          </div>
        <div class="loginDiv">
            <fieldset>
         <label>
           <p>ID</p>
           <input class="loginWrite" ID="ID" />
         </label>
         <label>
           <p>Password</p>
           <input class="loginWrite" password="password" />
         </label>

        </fieldset>
        <button type="submit">Submit</button>
        <button type="submit">Forgot Password</button>
        </div>

        <div class="loginPower">
            <h4>
                Powered by Bilcare
            </h4>
        </div>
        </div>
  );
}


export default Login;