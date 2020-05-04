import React, { useState, useEffect } from 'react';

import ForgotPasswordPage from './ForgotPasswordPage';

function ForgotPasswordContainer({ dispatch, storeLayout }) {
  const [isOpen, setIsOpen] = useState('1');
  const toggle = e => setIsOpen(e);

  const props = {
    dispatch,
    storeLayout,
    isOpen,
    toggle,
  };

  return <ForgotPasswordPage {...props} />;
}

export default ForgotPasswordContainer;
