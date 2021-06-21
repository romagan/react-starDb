import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-details.css';

import SwapiService from '../../services/swapi-service';

export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoading: false
  }

  swapiService = new SwapiService()

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;

    if (!itemId) return;

    this.setState({isLoading: true});

    this.swapiService
      .getPerson(itemId)
      .then((item) => {
        this.setState({ item });
        this.setState({ isLoading: false });
      })
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    if (!this.state.item) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item;

    return (
        <div className="person-details card">
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}