import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import MedicalReport from "./routes/MedicalReport";
import TestResult from "./routes/TestResult";
import Feedback from "./routes/Feedback";
import Help from "./routes/Help";
import Login from "./routes/Login";
import Smoking from "./routes/Smoking";
import Veneral from "./routes/Veneral";
import HealthBackGround from "./routes/HealthBackGround";
import MyProfile from "./routes/MyProfile";
import Appointment from "./routes/Appointment";
import AboutUs from "./routes/AboutUs";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="MedicalReport" element={<MedicalReport />} />
      <Route path="Home" element={<Home />} />
      <Route path="TestResult" element={<TestResult />} />
      <Route path="Feedback" element={<Feedback/>} />
      <Route path="Veneral" element={<Veneral/>} />
      <Route path="Help" element={<Help/>}/>
      <Route path="Smoking" element={<Smoking/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="HealthBackGround" element={<HealthBackGround/>} />
      <Route path="MyProfile" element={<MyProfile/>} />
      <Route path="Appointment" element={<Appointment/>} />
      <Route path="AboutUs" element={<AboutUs/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);