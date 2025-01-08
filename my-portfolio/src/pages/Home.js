// src/pages/Home.js
import React from 'react';
// import './Home.css'; // Create a CSS file to style this page
import gradImage from '../GradImage.jpg';

const Home = () => {
    return (
        <div className="home">
            <h2>Braden Peterson</h2>
            <img src={gradImage} alt="Braden Peterson" className="profile-pic" />
        </div>
    );
};

export default Home;