import React from 'react';
import BackgroundsPage from './BackgroundsPage';

function BackgroundsContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <BackgroundsPage {...props} />;
}

export default BackgroundsContainer;
