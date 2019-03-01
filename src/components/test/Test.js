import React, { Component } from 'react';

class test extends Component {
  state = {
    title: '',
    body: ''
  };
  // Runs after componentWillMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // Runs first
  /* componentWillMount() {
    console.log('componentWillMount ... ');
  }

  // Only runs when it updates (i.e. changing the state)
  componentDidUpdate() {
    console.log('componentDidUpdate ... ');
  }

  // When component receives new properties it will run (mostly with Redux)
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps ...');
  }
  // Same lifecycle method as ^^
  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate ...');
  } */

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default test;
