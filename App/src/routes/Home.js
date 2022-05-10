import axios from 'axios';
import { axiosObj, getAxiosConfig } from '../consts';
import './App.css';
function Home() {

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
          <div class = "midSide">
          <img class ="mainImage"src="https://cdn-res.keymedia.com/cdn-cgi/image/w=480,h=320,fit=cover,f=auto/https://cdn-res.keymedia.com/cms/images/us/003/0248_637163141592652213.jpg" alt="profile_picture"></img>
          <div class = "homeText">
            <h3 class = "health3">Your health is important to us</h3>
          <p> Our objective is to promote physical and emotional well-being of our students and staff. With facilities on both Main and East Campuses, we provide primary care medical services as well as preventative health care and health education.</p>
          <h5> In case of emergency:
  Dial extension 6666 from campus or
  0312 266 4050 or 0312 266 4051 from outside campus</h5>
        <h6>BOTH HEALTH CENTERS ARE OPEN 7/24 IN CASE OF EMERGENCY
  In cases of emergency, university ambulances accompanied by Health Center doctors and nurses are available 24 hours a day to take patients to nearby hospitals.  </h6>
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
  
  
  export default Home;