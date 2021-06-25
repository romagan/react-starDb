import React from 'react';
import { SwapiServiceConsumer } from '../context/swapi-service';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const swapiProps = mapMethodsToProps(swapiService);

          return (
            <Wrapped {...props } { ...swapiProps } />
          )
        }}
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService;
