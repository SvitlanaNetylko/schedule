import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
    <div class="container">



        <div class="header">
            <div class="logo">Schedule</div>
            <div class="nav">
                <b class="nav_link" href="#">About</b>
                <b class="nav_link" href="#">Service</b>
                <b class="nav_link" href="#">Blog</b>
                <b class="nav_link" href="#">Work</b>
                <b class="nav_link" href="#">Contact</b>
        </div>


        </div>


        <div class="content">
            <h1></h1>
            <h1>Create new schedule</h1>
            <p>Press the button</p>
            <p>and start creation</p>

            <a href="#" id="create">See already created scheduls</a>
            <div id="more-text-here1"></div>
            <div id="more-text-here2"></div>
            <a href="indexCreate.html">Create</a>
            <a href="login.html">
            Login</a>

            <p>input your pasword or</p>
            <p>register if you open</p>
            <p>this page for the first time</p>

        </div>
        <div class="sidebar">
            <h3>Other</h3>
            <img src="../static/images/ddd.png" alt="Other"></img>
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

      </div>
  );
}

export default App;
