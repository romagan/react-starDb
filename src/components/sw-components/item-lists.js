import React from 'react';
import itemList from '../item-list/';
import { withData, withSwapiService, compose } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    )
  }
}

const renderName = ({ name, gender, birthYear }) => (<p>{ name } <span className="gray">({ gender }, { birthYear })</span></p>);
const renderPopulationAndName = ({ name, population }) => (<p>{ name } <span className="gray">({ population })</span></p>);
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

const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                    )(itemList);

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withChildFunction(renderPopulationAndName)
                    )(itemList);

const StarshipList = compose(
                      withSwapiService(mapStarshipMethodsToProps),
                      withData,
                      withChildFunction(renderModelAndName)
                    )(itemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}
