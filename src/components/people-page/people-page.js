import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  }

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {({ name, gender, birthYear }) => (<p>{ name } <span className="gray">({ gender }, { birthYear })</span></p>)}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}
