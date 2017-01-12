import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentCardContainer from './components/ContentCardContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ContentCardContainer />
        </div>
      </div>
    )
  }
}

export default App;
