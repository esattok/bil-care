
import './App.css';

function Veneral() {
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
                <h2>Veneral Disease</h2>
               
            </div>

            <div class = "healthReports">
                 <div class="veneralBox">
                    <p>
                        Veneral diseases are commonly referred to as sexually-transmitted diseases(STDs). They are spread by skin-to-skin contact in the genital area.
                        Veneral disease can affect anyone who is sexually active.
                    </p>
                    <p>
                        Commonly veneral diseases include:
                    </p>
                    <p>
                        Syphilis <br></br>
                        Gonorrhera <br></br>
                        Chlamydia <br></br>
                        Human Papillomavirus Infection(HPV) <br></br>
                        Genital Herpes <br></br>
                        HIV/AIDS <br></br>

                    </p>
                    
                    <p>
                        Veneral diseases often impact skin health by causing warts and lesions on the skin in the affected area.
                        Depending on your diagnosis, your dermatologist can help you develop a treatment plan to relieve some of the
                        discomfort and restore your skin to to a healthier appearance. If you are concerned about treating the effects
                        of veneral disease on skin, make an appointment with your dermatologist.
                    </p>
                </div>
                <div class="veneralBox1">
               
               <br></br>
               <br></br>
               <br></br>
               <p>
                   If you have mentioned effects, consult a specialist.
               </p>
               <br></br>
               <br></br>
               <br></br>

               <p>
                   Phone Number: (0312) 290 16 66
               </p>

               <br></br>
               <br></br>
               <br></br>

               <button >
               <a href="/Appointment">
                      <span class="item">Appointment</span>
                </a>
               </button>

                </div>
               
            </div>

            <div>
                
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


export default Veneral;