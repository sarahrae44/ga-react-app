import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h5>by {this.props.author}</h5>
        <h4>{this.props.body}</h4>
        <h3>Comments:</h3>
        <p>{this.props.comments[0]}</p>
      </div>
    )
  }
}

export default Post;
