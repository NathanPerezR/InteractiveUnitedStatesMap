import './App.css';
import React from 'react';
import UnitedStates from './components/UnitedStates';
import About from './components/About';

export default function App() {
  return (
    <div className="landingPage">
      <div className="UnitedStatesWrapper">
        <UnitedStates />
      </div>
      <div className="aboutWrapper">
        <About />
      </div>
    </div>
  );
}
