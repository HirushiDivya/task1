import './App.css';
import React from 'react';
import './components/Header';
import './components/HeroSection'
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
    </div>
  );
}


export default App;
