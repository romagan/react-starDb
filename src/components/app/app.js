import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../context/swapi-service';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { StarshipDetails } from '../sw-components';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';

import './app.css';

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <SwapiServiceProvider value={ this.state.swapiService }>
        <Router>
          <div className="stardb-app">
            <div className="container-fluid">
                <Header />
                <RandomPlanet />

                <Switch>
                  <Route path="/" render={() => <h1>Welcome to StarDB</h1>} exact />
                  <Route path ="/people/:id?" component={ PeoplePage } />
                  <Route path ="/planets/:id?" component={ PlanetsPage } />
                  <Route path ="/starships" component={ StarshipsPage } exact />
                  <Route path ="/starships/:id"
                          render={({ match }) => {
                            const { id } = match.params;
                            return <StarshipDetails itemId={ id } />
                          }} />

                  <Route path ="/login"
                          render={() => <LoginPage isLoggedIn={ isLoggedIn } onLogin={ this.onLogin } />}
                          />
                  <Route path ="/secret"
                          render={() => <SecretPage isLoggedIn={ isLoggedIn } />}
                          />

                  Будет срабатывать всегда, т.к. не указан to
                  <Route render={() => <h2>Page not found</h2>} />

                  или
                  <Redirect to="/" />
                </Switch>
            </div>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
};
