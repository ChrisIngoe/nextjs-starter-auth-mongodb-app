import React from 'react';
import DocumentationPage from './DocumentationPage';

function DocumentationContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <DocumentationPage {...props} />;
}

export default DocumentationContainer;
