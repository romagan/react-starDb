import React from 'react';
import { withRouter } from 'react-router';

import { PlanetList, PlanetDetails } from '../sw-components';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

const PlanetsPage = ({ history, match }) => {
  const itemList = (
    <PlanetList onItemSelected={ (id) => history.push(id) }
    />
  );

  const planetDetails = (
    <PlanetDetails itemId={ match.params.id } />
  );

  return (
    <ErrorBoundry>
      <Row left={ itemList } right={ planetDetails } />
    </ErrorBoundry>
  )
}

export default withRouter(PlanetsPage);
