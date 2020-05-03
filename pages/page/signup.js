import React from 'react';

import SingleLayout from '../../layout/SingleLayout';
import SignUpContainer from '../../components/container/page/SignUpContainer';
import HeadDefault from '../../layout/head/HeadDefault';

const SignUp = () => {
  return (
    <>
      <HeadDefault
        title="Sign Up | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <SingleLayout>
        <SignUpContainer />
      </SingleLayout>
    </>
  );
};

export default SignUp;
