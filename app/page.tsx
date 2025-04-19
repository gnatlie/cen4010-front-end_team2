"use client";

import dogImage from './img/Dog.png'
import './css/mainStyles.css';
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [hungerLabel, setHunger] = useState(80);
  const [cleanLabel, setClean] = useState(70);
  const [playLabel, setPlay] = useState(90);

  const updateClean = () => {
    setClean(100);
  };

  const updateHunger = () => {
    setHunger(100);
  };

  const updatePlay = () => {
    setPlay(100);
  };
  return (
    <div className="page_style">
      <div className="btn-group">
        <button>Logout</button>
        <button>Fluffy</button>
        <button>0:56</button>
      </div>

      <div className="container">
        <div className="triangle-left"></div>
        <div className="oval-wrapper">
          <div className="oval">
            <img src={dogImage.src} alt="Puppy" className="oval-img" />
          </div>
        </div>
        <div className="triangle-right"></div>
      </div>

      <div className="btn-group">

        <button onClick={updateClean}>Clean</button>
        <label id="cleanLevel">{cleanLabel}/100</label>

        <button onClick={updateHunger}>Feed</button>
        <label id="playLevel">{hungerLabel}/100</label>

        <button onClick={updatePlay}>Play</button>
        <label id="hungerLevel">{playLabel}/100</label>
      </div>
    </div>
  );
}
