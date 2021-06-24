import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../context/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  }

  render() {
    const planet =
      this.state.showRandomPlanet
        ? <RandomPlanet />
        : null;

    return (
      <SwapiServiceProvider value={ this.state.swapiService }>
        <div className="stardb-app">
          <div className="container-fluid">
              <Header />
              { planet }
              <PeoplePage />
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
};
