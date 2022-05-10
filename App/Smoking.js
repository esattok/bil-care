import logo from './logo.svg';
import './App.css';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function Smoking() {
  return (
    
    <div className="App">
       
      <div className="topnav">
      <span className = "logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfwjG00HwhxlbZO1Krpl30FUL8YtT-S1ZtA&usqp=CAU" alt="Image Load Error" width="100" height="100"></img>
        </span>
        <span className='healthCenter'>
         <h1>BİLKENT HEALTH CENTER</h1>
        </span>
  <a class="active" href="#home">Log-out</a>
  <a class="active" href="#home">My Profile</a>
  </div>

    <body>
    <div class="wrapper">
        <div class="sidebar">
        <div class="profile">
                <img src="https://cdn4.vectorstock.com/i/thumb-large/28/63/profile-placeholder-image-gray-silhouette-vector-21542863.jpg" alt="profile_picture"></img>
                <h3>Ahmet Tuna Baykal</h3>
            </div>

            <ul>
                <li>
                    <a href="/Users/ahmettunabaykal/Desktop/cs-319/src/App.js" class="active">
                    
                        <span class="item">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/Users/ahmettunabaykal/Desktop/cs-319/src/MedicalReport.js" class="active">
                       
                        <span class="item">My Medical Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="item">Test Results</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    
                        <span class="item">Smoking Cessitation</span>
                    </a>
                </li>
                <li>
                    <a href="/Users/ahmettunabaykal/Desktop/cs-319/src/App.js">
                  
                        <span class="item">Veneral Diseases</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    
                        <span class="item">Health Background Form</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                      
                        <span class="item">About Us</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                      
                        <span class="item">User Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                      
                        <span class="item">Help</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class = "medicalMid">
            <div class ="medicalMidText">
                <h2>Smoking Cessitation</h2>
                <button type="submit" class="buttonMake">Make Appointment</button>
            </div>

            <div class ="smokingDiv">
                <p>Each cigarette takes two minutes of your life.</p>
                <p>Quitting smoking reduces your chances of getting cancer.</p>
                <p>Almost one out of every 5 deaths in the world is due to smoking.</p>

              <form class ="smokingForm">
                <fieldset>
                    <label>
                    <p>How many times do you smoke in one day?</p>
                    <input class="write" times="times" />
                    </label>
                    <label>
                    <p>For how long have you been smoking?</p>
                    <input class="write" howlong="howlong" />
                    </label>
                    <label>
                    <p>Do you find it difficult not to smoke in places where smoking is prohibited?</p>
                    <input class="write" yesno="yesno" />
                    </label>
                    <label>
                    <p>How soon after you wake up do you smoke your first cigarette?</p>
                    <input class="write" yesno="yesno" />
                    </label>
                    <label>
                    <p>Which cigarette would you hate most to give up?</p>
                    <input class="write" yesno="yesno" />
                    </label>
                    <label>
                    <p>How old were you when you first smoked an entire cigarette?</p>
                    <input class="write" yesno="yesno" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
                </form>
            </div>

        </div>
        <div class = "rightSide">
          <span class = "info1">
              <h3>
              Main Campus Health Center
Monday through Friday
08:30-11:30 and 12:30-17:30
Tel: Extension 1666 or 0312 290 1666

              </h3>
              <h3> East Campus Health Center
Monday through Friday
08:30-12:10 and 13:10-17:30
Tel: Extension 5057 or 0312 290 5057</h3>
          </span>
          <span class = "info2">
              <h3>
              What is considered a medical emergency:

Trauma, traffic accident, workplace accident
Breathing difficulties
Severe localized pain
Fainting or feeling faint
Severe allergic reactions
Seizures or convulsions</h3>
          </span>
        </div>
        </div>

  <script>

  </script>

    </body>

    <footer>


    </footer>
      
    </div>
  );
}


export default Smoking;