import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index';
import Home from "./routes/Home";
import MedicalReport from "./routes/MedicalReport";
import TestResult from "./routes/TestResult";
import Feedback from "./routes/Feedback";
import Help from "./routes/Help";
import Login from "./routes/Login";
import Smoking from "./routes/Smoking";
import Veneral from "./routes/Veneral";
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/MedicalReport">MedicalReport</Link> |{" "}
        <Link to="/">Login</Link>|{" "}
        <Link to="/Feedback">Feedback</Link>|{" "}
        <Link to="/Help">Help</Link>|{" "}
        <Link to="/Smoking">Smoking</Link>|{" "}
        <Link to="/TestResult">TestResult</Link>|{" "}
        <Link to="/Veneral">Veneral</Link>|{" "}
        <Link to="/Home">Home</Link>|{" "}
        <Link to="/AboutUs">AboutUs</Link>|{" "}
        <Link to="/Appointment">Appointment</Link>|{" "}
        <Link to="/HealthBackGround">HealthBackGround</Link>|{" "}
        <Link to="/MyProfile">MyProfile</Link>|{" "}

      </nav>
    </div>
  );
}