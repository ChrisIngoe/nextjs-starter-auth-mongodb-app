import React from 'react';
import TextPage from './TextPage';

function TextContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <TextPage {...props} />;
}

export default TextContainer;
