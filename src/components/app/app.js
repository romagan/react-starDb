import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
  }

  render() {
    const planet =
      this.state.showRandomPlanet
        ? <RandomPlanet />
        : null;

    return (
      <div className="stardb-app">
        <div className="container-fluid">
            <Header />
            { planet }
            <PeoplePage />
        </div>
      </div>
    );
  }
};
