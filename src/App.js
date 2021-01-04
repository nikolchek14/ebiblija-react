import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Biblija from './Biblija.json';
import Sodrzina from './Sodrzina.js';

function App() {
  return (
    <div className="App">
      <Sodrzina />
    </div>
  );
}

export default App;
