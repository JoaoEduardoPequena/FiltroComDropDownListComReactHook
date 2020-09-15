import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Formulario} from "./components/Formulario"
import {useFethProvincia} from "./components/Provincia/hooks/useFethProvincia";


function App() {
  return (
    <div className="App">
        <Formulario />
    </div>
  );
}

export default App;
