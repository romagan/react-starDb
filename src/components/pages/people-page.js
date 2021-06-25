import React from 'react';
import { withRouter } from 'react-router';

import { PersonList, PersonDetails } from '../sw-components';

import Row from '../row';
import ErrorBoundry from '../error-boundry';

const PeoplePage = ({ match, history }) => {
  const itemList = (
    <PersonList onItemSelected={(id) => history.push(id)} />
  );

  const personDetails = (
    <PersonDetails itemId={ match.params.id } />
  );

  return (
    <ErrorBoundry>
      <Row left={ itemList } right={ personDetails } />
    </ErrorBoundry>
  )
}

export default withRouter(PeoplePage);
