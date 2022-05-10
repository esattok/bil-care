import logo from './logo.svg';
import './App.css';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function AboutUs() {
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
        

        <div class ="aboutUsCon">
        <div class ="aboutMidText">
                <h2>About Us</h2>
               
            </div>
            <div class="aboutUs">
                <h5>
                    Ahmet Tuna Baykal 
                </h5>
                <h5>
                    Contact Info: tuna.baykal@ug.bilkent.edu.tr
                </h5>
            </div>

            <div class="aboutUs">
            <h5>
                    Esad İsmail Tok
                </h5>
                <h5>
                    Contact Info: esad.tok@ug.bilkent.edu.tr
                </h5>
            </div>

            <div class="aboutUs">
            <h5>
                    Elifnur Alsaç 
                </h5>
                <h5>
                    Contact Info: elifnur.alsac@ug.bilkent.edu.tr
                </h5>
            </div>
            <div class="aboutUs">
            <h5>
                    Kerem Tayhan
                </h5>
                <h5>
                    Contact Info: kerem.tayhan@ug.bilkent.edu.tr
                </h5>
            </div>

            <div class="aboutUs">
            <h5>
                    Alper Biçer
                </h5>
                <h5>
                    Contact Info: alper.bicer@ug.bilkent.edu.tr
                </h5>
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


export default AboutUs;