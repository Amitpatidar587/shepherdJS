import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { TourProvider } from './TourContext';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Router>
    <TourProvider>
      <App />
    </TourProvider>
  </Router>
);
