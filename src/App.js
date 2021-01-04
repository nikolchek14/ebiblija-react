import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Biblija from './Biblija.json';
import Osnova from './Osnova.js';

function App() {
  return (
    <div className="App">
      <Osnova />
    </div>
  );
}

export default App;
