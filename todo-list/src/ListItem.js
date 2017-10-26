import React, { Component } from 'react';
import './App.css';

// class ListItem extends Component {
//   render() {
//     return (
//       <li>{this.props.doThis}</li>
//     );
//   }
// }

// using functional components
const ListItem = props => (
  <div>
    <li>{props.doThis}</li>
  </div>
)

export default ListItem;
