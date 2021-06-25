import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService, withDataDetail, compose } from '../hoc-helpers';

const withChildComponents = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped { ...props }>
        { fn().props.children }
      </Wrapped>
    )
  }
}

const renderPeopleDetails = () => {
  return (
    <React.Fragment>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </React.Fragment>
  )
}

const renderPlanetDetails = () => {
  return (
    <React.Fragment>
      <Record field="climate" label="Climate" />
      <Record field="terrain" label="Terrain" />
      <Record field="diameter" label="Diameter" />
    </React.Fragment>
  )
}

const renderStarshipDetails = () => {
  return (
    <React.Fragment>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="passengers" label="Passengers" />
      <Record field="costInCredits" label="Cost" />
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

const PersonDetails = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withDataDetail,
                        withChildComponents(renderPeopleDetails)
                      )(ItemDetails);

const PlanetDetails = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withDataDetail,
                        withChildComponents(renderPlanetDetails)
                      )(ItemDetails);

const StarshipDetails = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withDataDetail,
                        withChildComponents(renderStarshipDetails)
                      )(ItemDetails);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
