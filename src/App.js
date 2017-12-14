import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  // Updating - After initial render
  // To operate on the DOM when the component has benn updated.
  componentDidUpdate() {
    const wordWrapperContent = ReactDOM.findDOMNode(this.refs.word).innerHTML;
    console.log(wordWrapperContent);
  }

  render() {
    return (
      <div>
        <span class="word" id="word" ref="word">
          Tefa
        </span>
      </div>
    );
  }
}

export default App;
