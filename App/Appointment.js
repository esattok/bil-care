import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function Appointment() {
    const [dayS, setDayS] = useState("Monday");
    const [dayV, setDayV] = useState("Monday");
    const [dayP, setDayP] = useState("Monday");
    const [dayD, setDayD] = useState("Monday");
    const [dayHourS, setHourS] = useState("9.00-10.00");
    const [dayHourV, setHourV] = useState("9.00-10.00");
    const [dayHourP, setHourP] = useState("9.00-10.00");
    const [dayHourD, setHourD] = useState("9.00-10.00");

    const handleChangeS = (event) => {
      setDayS(event.target.value)
    }
    const handleChangeV = (event) => {
        setDayV(event.target.value)
      }
      const handleChangeHS = (event) => {
        setHourS(event.target.value)
      }
      const handleChangeHV = (event) => {
          setHourV(event.target.value)
        }
        const handleChangeP = (event) => {
            setDayP(event.target.value)
          }
          const handleChangeD = (event) => {
              setDayD(event.target.value)
            }
            const handleChangePH = (event) => {
                setHourP(event.target.value)
              }
              const handleChangeDH = (event) => {
                  setHourD(event.target.value)
                }
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
       
        <div class="container">
            <div class="appointmentBox">
                <h4>
                    Make Appointment for Smoking Cessitation
                </h4>
                <form>

                <h5>Please Select Day</h5>
                <select value={dayS} onChange={handleChangeS}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>

                <h5>Please Select Hour</h5>
                <select value={dayHourS} onChange={handleChangeHS}>
                    <option value="9.00-10.00">9.00-10.00</option>
                    <option value="10.00-11.00">10.00-11.00</option>
                    <option value="11.00-12.00">11.00-12.00</option>
                    <option value="13.00-14.00">13.00-14.00</option>
                    <option value="14.00-15.00">14.00-15.00</option>
                    <option value="15.00-16.00">15.00-16.00</option>
                    <option value="16.00-17.00">16.00-17.00</option>
                    </select>

                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" class="buttonMake">Make Appointment</button>
    </form>
                
            </div>
            <div class ="appointmentBox">  
                <h4>
                    Make Appointment for Veneral Disease
                </h4>
                <form>
                    <h5>Please Select Day</h5>

                <select value={dayV} onChange={handleChangeV}>

                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
        
                </select>

                <h5>Please Select Hour</h5>
                <select value={dayHourV} onChange={handleChangeHV}>
                    <option value="9.00-10.00">9.00-10.00</option>
                    <option value="10.00-11.00">10.00-11.00</option>
                    <option value="11.00-12.00">11.00-12.00</option>
                    <option value="13.00-14.00">13.00-14.00</option>
                    <option value="14.00-15.00">14.00-15.00</option>
                    <option value="15.00-16.00">15.00-16.00</option>
                    <option value="16.00-17.00">16.00-17.00</option>
                    </select>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" class="buttonMake">Make Appointment</button>
    </form>
            </div>
            <div class="appointmentBox">
                <h4>
                    Make Appointment for Dentist 
                </h4>
                <form>

                <h5>Please Select Day</h5>
                <select value={dayD} onChange={handleChangeS}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>

                <h5>Please Select Hour</h5>
                <select value={dayHourD} onChange={handleChangeHS}>
                    <option value="9.00-10.00">9.00-10.00</option>
                    <option value="10.00-11.00">10.00-11.00</option>
                    <option value="11.00-12.00">11.00-12.00</option>
                    <option value="13.00-14.00">13.00-14.00</option>
                    <option value="14.00-15.00">14.00-15.00</option>
                    <option value="15.00-16.00">15.00-16.00</option>
                    <option value="16.00-17.00">16.00-17.00</option>
                    </select>

                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" class="buttonMake">Make Appointment</button>
    </form>
                
            </div>
            <div class="appointmentBox">
                <h4>
                    Make Appointment for Psychiatry
                </h4>
                <form>

                <h5>Please Select Day</h5>
                <select value={dayP} onChange={handleChangeS}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>

                <h5>Please Select Hour</h5>
                <select value={dayHourP} onChange={handleChangeHS}>
                    <option value="9.00-10.00">9.00-10.00</option>
                    <option value="10.00-11.00">10.00-11.00</option>
                    <option value="11.00-12.00">11.00-12.00</option>
                    <option value="13.00-14.00">13.00-14.00</option>
                    <option value="14.00-15.00">14.00-15.00</option>
                    <option value="15.00-16.00">15.00-16.00</option>
                    <option value="16.00-17.00">16.00-17.00</option>
                    </select>

                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" class="buttonMake">Make Appointment</button>
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


export default Appointment;