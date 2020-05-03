import React from 'react';
import IconsPage from './IconsPage';

function IconsContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <IconsPage {...props} />;
}

export default IconsContainer;
