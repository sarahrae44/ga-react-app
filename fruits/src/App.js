import React, { Component } from 'react';
import './App.css';

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon'
]

const FruitList = props => (
  <ul>
    {props.fruits.map(fruit => <li>{fruit}</li>)}
  </ul>
)
const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
  </div>
)

class FruitContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruitsToDisplay: props.fruits,
      unmatchedFruits: [],
      filterValue: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(event) {
    event.preventDefault();
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit => fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      const unmatchedFruits = props.fruits.filter(fruit => !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      return {
        fruitsToDisplay: filteredFruitList,
        unmatchedFruits: unmatchedFruits,
        filterValue
      }
    })
  }
  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        <p>Matching fruits:</p>
        <FruitList fruits={this.state.fruitsToDisplay} />
        <p>Unmatched fruits:</p>
        <FruitList fruits={this.state.unmatchedFruits} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <FruitContainer fruits={fruitList} />
    )
  }
}

export default App;
