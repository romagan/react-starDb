import React, { Component } from 'react';

import { PersonList, PersonDetails } from '../sw-components/';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const itemList = (
      <PersonList
        onItemSelected={ this.onPersonSelected }
      />
    );

    const personDetails = (
      <PersonDetails
        itemId={ this.state.selectedPerson } />
    );

    return (
      <ErrorBoundry>
        <Row left={ itemList } right={ personDetails } />
      </ErrorBoundry>
    )
  }
}
