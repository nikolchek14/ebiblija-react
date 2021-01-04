import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Biblija from './Biblija.json';
import Sodrzina from './Sodrzina.js';
import Glava from './Glava.js';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Route component={Sodrzina} path="/" exact />
      <Route component={Glava} path="/glava" />
    </div>
    </BrowserRouter>
  );
}

export default App;
