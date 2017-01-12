import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContentCard from './components/ContentCard'

class App extends Component {
  render() {
    return (
            <div className="container">
                <div className="row">
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      </div>
      </div>
    )
  }
}

export default App;
