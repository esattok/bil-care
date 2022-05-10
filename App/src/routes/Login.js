import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { InputText } from 'primereact/inputtext';

import { axiosObj, getAxiosConfig } from '../consts';






function Login() {
  async function handleLogin() {
    const res = await axiosObj.post("auth/login", 
    {
        username: text,
        password: "admin",
    },getAxiosConfig());
    console.log('res', res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
}
  
async function handleEkle() {
    const res = await axiosObj.post("doctors", 
    {
        name: "Deneme 01",
    }, getAxiosConfig());
    console.log('res', res.data);
}

async function handleGuncelle() {
    const res = await axiosObj.patch("doctors/1", 
    {
        name: "Deneme 02",
    }, getAxiosConfig());
    console.log('res', res.data);
}

async function handleSil() {
    const res = await axiosObj.delete("doctors/1", 
    getAxiosConfig());
    console.log('res', res.data);
}

async function handleListele() {
    const res = await axiosObj.get("doctors", 
    getAxiosConfig());
    console.log('res', res.data);
}
const[text, setText] = useState("");
console.log("text");

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
           <InputText value={text} onChange={e => setText(e.target.value)}/>
           {console.log(text)}
         </label>
         <label>
           <p>Password</p>
           <input class="loginWrite" password="password" />
         </label>

        </fieldset>
        <button onClick={handleLogin} type="">
                <a href="/Home" class="active">
                    <span class="item">Home</span>
                </a>
        </button>
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