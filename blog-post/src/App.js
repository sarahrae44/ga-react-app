import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleFormInput(e) {
    console.log(e);
    this.setState({
      body: e.target.value
    })
  }

  render() {
      let authors = this.props.allAuthors.map( (author, index) => (<Author author={author} key={index} />))
    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <h4>{this.state.body}</h4>
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)} />
        <h3>Comments:</h3>
        <Comment body={this.props.comments[0]} />
      </div>
    )
  }
}

export default Post;
