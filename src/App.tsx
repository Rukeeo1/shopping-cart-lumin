import React from 'react';
import './App.scss';
import Navbar from 'components/Navbar';
import LandingPage from 'views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'views/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
