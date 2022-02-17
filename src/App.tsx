import React from 'react';
import './App.css';
import persons from "./components/exercice1/persons.json";
import ExerciceClass from './components/exercice1/ExerciceClass';
import { Person } from './models';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExerciceClass persons={persons as Person[]} />
      </header>
    </div>
  );
}

export default App;
