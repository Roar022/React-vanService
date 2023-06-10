import React from "react";
import { BrowserRouter, Route , Routes, Link } from 'react-router-dom';
export function About() {
  return (
    <div className="about--page">
      <div className="about--page--image">

      </div>

      <div className="about--body">
        <h1> Don’t squeeze in a sedan when you could relax in a van.</h1>
        <h3>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </h3>
        <br/>
        <h3>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </h3>
        </div>
        <div className="about--explore">
          <h1>Your destination is waiting. Your van is ready.</h1>
          <button>Explore our vans</button>
        </div>
      
    </div>
  );
}
