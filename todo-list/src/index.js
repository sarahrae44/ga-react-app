import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

let toDos = ["Shop at REI", "Shop at Altar'd State", "Call Massage Envy"]

ReactDOM.render(<MyList theList={toDos} />, document.getElementById('root'));
