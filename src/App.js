import React from 'react';
import logo from './logo.svg';

import './App.css';


function App() {
    return (
      <div className="App">

        <div className="header">
            <div className="logo">Schedule</div>
            <div className="nav">
                <b className="nav_link" href="#">About</b>
                <b className="nav_link" href="#">Service</b>
                <b className="nav_link" href="#">Blog</b>
                <b className="nav_link" href="#">Work</b>
                <b className="nav_link" href="#">Contact</b>
            </div>
        </div>

        <h1></h1>
        <h1>Create new schedule</h1>
        <p>Press the button</p>
        <p>and start creation</p>

        <a href="{% url 'scheduleCreate' %}" class="top-menu">
          <span class="glyphicon glyphicon-plus"></span>
        </a>
        <form action="{% url 'scheduleCreate' %}" method="post">

        <label for="{% url 'scheduleCreate' %}">Department: </label>
        <input  id="{% url 'scheduleCreate' %}" type="text"  ></input>

        <label for="{% url 'scheduleCreate' %}">Description: </label>
        <input  id="{% url 'scheduleCreate' %}" type="text"  ></input>

        <button type="submit" >Create</button>
      </form>
        <a type="button" href="#" id="CreateButton">Create</a>

        <a type="button" href={"#"} id="LoginButton">Login</a>

        <p>input your pasword or</p>
        <p>register if you open</p>
        <p>this page for the first time</p>


        <div class="sidebar">
          <h3>Other</h3>
          <span className="close">&times;</span>
          <h1></h1>
          <a href="">Edit</a>
          <h1></h1>
          <a href="">Share</a>
          <h1></h1>
          <a href="">Open old</a>
          <h1></h1>
        </div>



        <div class="about">
          <h2 class="text1">About our service :</h2>
          <p>A service that will</p><p>become an indispensable assistant for an education worker:</p><p> a university teacher, college or teacher at school!</p><p>Create you`r perfect shedule</p><p>easy without problems!!!
          </p>
        </div>

      <div class="add">

      </div>

      <div class="blog">
        <img src="../static/images/346.png" hspace="100"></img>
        <img src="../static/images/347.png" hspace="100"></img>
        <img src="../static/images/348.png" hspace="100"></img>
      </div>

      <div class="footer">
        <h5 class="p">Phone : </h5>
        <h5 class="ad">Adress : </h5>
      </div>
    </div>
);
}

export default App;

/*function loginRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CreateButton").innerHTML=this.responseText;
        }
    };
    xhttp.open("GET", "LoginButton", true);
    xhttp.send();
}*/
