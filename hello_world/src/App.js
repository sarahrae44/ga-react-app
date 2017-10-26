import React, {Component} from 'react';

class Hello extends Component {
  constructor (props) {
    super()
    this.state = {
      moodPoints: 1
    }
  }
  increaseMood(e) {
    if(this.state.moodPoints === 10) {
      this.setState({
        moodPoints: 1
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
        <p>You love: {this.props.animals}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    )
  }
}

export default Hello
