import React from 'react';
import mohanImage from '.././assets/mohan.jpg';
import './Home.css';

const Home = () => {
  return (
    <div class ="class">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Mohan Prasanth, a Computer Science student and developer.</p>
      <img src={mohanImage} alt="Mohan's Picture" />

    </div>
  );
};

export default Home;