import React from 'react';
import { StarshipList } from '../sw-components';
import ErrorBoundry from '../error-boundry';
import { withRouter } from 'react-router';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={ (id) => history.push(id) } />
    </ErrorBoundry>
  )
}

export default withRouter(StarshipsPage);
