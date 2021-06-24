import React from 'react';
import withData from '../hoc-helpers/with-data/';
import itemList from '../item-list/';
import withSwapiService from '../hoc-helpers/with-swapi-service/with-swapi-service';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    )
  }
}

const renderName = ({ name, gender, birthYear }) => (<p>{ name } <span className="gray">({ gender }, { birthYear })</span></p>);
const renderModelAndName = ({ name, model }) => (<p>{ name } ({ model })</p>);

const mapPersonMethodsToProps = (api) => {
  return {
    getData: api.getAllPeople
  }
}

const mapPlanetMethodsToProps = (api) => {
  return {
    getData: api.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (api) => {
  return {
    getData: api.getAllStarships
  }
}

const PersonList = withSwapiService(
                    withData(
                      withChildFunction(itemList, renderName)),
                      mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                    withData(
                      withChildFunction(itemList, renderName)),
                      mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withData(
                        withChildFunction(itemList, renderModelAndName)),
                        mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}
