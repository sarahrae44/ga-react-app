import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}

ReactDOM.render(
  <Hello name={person.personName} age={person.personAge} animals={person.favorites[0]} />,
  document.getElementById('root')
);
