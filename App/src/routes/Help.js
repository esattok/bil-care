
import './App.css';
import React from 'react';

function Help() {






  return (

    <div className="App">
       
      <div className="topnav">
      <span className = "logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfwjG00HwhxlbZO1Krpl30FUL8YtT-S1ZtA&usqp=CAU" alt="Image Load Error" width="100" height="100"></img>
        </span>
        <span className='healthCenter'>
         <h1>BİLKENT HEALTH CENTER</h1>
        </span>
        <a class="active" href="/Login">Log-out</a>
        <a class="active" href="/MyProfile">My Profile</a>
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
                        <a href="Home" class="active">
                          <span class="item">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/MedicalReport">
                       
                        <span class="item">My Medical Reports</span>
                    </a>
                </li>
                <li>
                    <a href="/TestResult">
                        <span class="item">Test Results</span>
                    </a>
                </li>
                <li>
                    <a href="/Smoking">
                    
                        <span class="item">Smoking Cessitation</span>
                    </a>
                </li>
                <li>
                    <a href="/Veneral">
                  
                        <span class="item">Veneral Diseases</span>
                    </a>
                </li>
                <li>
                    <a href="/HealthBackGround">
                    
                        <span class="item">Health Background Form</span>
                    </a>
                </li>
                <li>
                    <a href="/AboutUs">
                      
                        <span class="item">About Us</span>
                    </a>
                </li>
                <li>
                    <a href="/Feedback">
                      
                        <span class="item">User Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/Help">
                      
                        <span class="item">Help</span>
                    </a>
                </li>
            </ul>
        </div>
       <div class = "medicalMid">
            <div class ="medicalMidText">
                <h2>HELP</h2>
                <h4> Send us a message & we are here to help you</h4>
            </div>

      <div>
      <form class ="form">
      <fieldset>
         <label>
           <p>E-mail*</p>
           <input class="write" email="email" />
         </label>
         <label>
           <p>Subject</p>
           <input class="write" subject="subject" />
         </label>
         <label >
           <p>Write a message</p>
           <input class="writeMessage" message="message" />
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


export default Help;