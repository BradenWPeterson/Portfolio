import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Braden Peterson</h1>
      <Username />
      <Skills />
      <Hobbies />
    </div>
  );
}

function Skills() {
  const [skills] = useState(['HTML', 'CSS', 'JavaScript']);
  return (
    <div>
      <h2>My Skills</h2>
      <SkillList skills={skills} />
    </div>
  )
}

function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

function Hobbies() {
  const [hobbies] = useState(['Soccer', 'Volleyball', 'Cliff Diving']);
  return (
    <div>
      <h3>My Hobbies</h3>
      <HobbieList hobbies={hobbies} />
    </div>
  )
}

function HobbieList({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobbie, index) => (
        <li key={index}>{hobbie}</li>
      ))}
    </ul>
  );
}


function Username() {
  const [name, setName] = useState("John Doe")

  return (
    <div>
      <p>What is your name?</p>
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <Welcome name={name} />
    </div>
  )
}

function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>
}



export default App;
