import React from 'react';
import ItemDetails from '../item-details';
import withDataDetails from '../hoc-helpers/with-data-detail';
import withSwapiService from '../hoc-helpers/with-swapi-service/with-swapi-service';
import { Record } from '../item-details';

const withChildComponents = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        { fn().props.children }
      </Wrapped>
    )
  }
}

const renderPlanetDetails = () => {
  return (
    <React.Fragment>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </React.Fragment>
  )
}

const mapPersonMethodsToProps = (api) => {
  return {
    getData: api.getPerson,
    getImageUrl: api.getPersonImage,
  }
}

const mapPlanetMethodsToProps = (api) => {
  return {
    getData: api.getPlanet,
    getImageUrl: api.getPlanetImage,
  }
}

const mapStarshipMethodsToProps = (api) => {
  return {
    getData: api.getStarship,
    getImageUrl: api.getStarshipImage,
  }
}

const PersonDetails = withSwapiService(
                        withDataDetails(
                          withChildComponents(ItemDetails, renderPlanetDetails)),
                          mapPersonMethodsToProps);

const PlanetDetails = withSwapiService(
                        withDataDetails(
                          withChildComponents(ItemDetails, renderPlanetDetails)),
                          mapPlanetMethodsToProps);

const StarshipDetails = withSwapiService(
                        withDataDetails(
                          withChildComponents(ItemDetails, renderPlanetDetails)),
                          mapStarshipMethodsToProps);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
