import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
    this.multiply = this.multiply.bind(this)
    this.subtract = this.subtract.bind(this)
    this.divide = this.divide.bind(this)
    this.state = {
      sum: 0,
      product: 0,
      difference: 0,
      quotient: 0
    }
  }

  add() {
    let sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0); this.setState({
      sum: sum
    })
  }

  multiply() {
    let product = (parseInt(this.refs.val3.value) || 0) * (parseInt(this.refs.val4.value) || 0);
    this.setState({
      product: product
    })
  }

  subtract() {
    let difference = (parseInt(this.refs.val5.value) || 0) - (parseInt(this.refs.val6.value) || 0);
    this.setState({
      difference: difference
    })
  }

  divide() {
    let quotient = (parseInt(this.refs.val7.value) || 0) / (parseInt(this.refs.val8.value) || 0);
    this.setState({
      quotient: quotient
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" ref="val1" onKeyUp={this.add}/>
          <span>+</span>
          <input type="text" ref="val2" onKeyUp={this.add}/>
          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
        <div className="multiply">
          <input type="text" ref="val3" onKeyUp={this.multiply}/>
          <span>x</span>
          <input type="text" ref="val4" onKeyUp={this.multiply}/>
          <span>=</span>
          <h3>{this.state.product}</h3>
        </div>
        <div className="difference">
          <input type="text" ref="val5" onKeyUp={this.subtract}/>
          <span>-</span>
          <input type="text" ref="val6" onKeyUp={this.subtract}/>
          <span>=</span>
          <h3>{this.state.difference}</h3>
        </div>
        <div className="quotient">
          <input type="text" ref="val7" onKeyUp={this.divide}/>
          <span>/</span>
          <input type="text" ref="val8" onKeyUp={this.divide}/>
          <span>=</span>
          <h3>{this.state.quotient}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
