import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Tour from './Tour';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useTour } from './TourContext';

const App = () => {

  return (
<>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Tour />
</>
   
  );
};

export default App;
