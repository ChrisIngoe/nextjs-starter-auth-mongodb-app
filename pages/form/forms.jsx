import React from 'react';

import MainLayout from '../../layout/MainLayout';
import FormsContainer from '../../components/container/form/FormsContainer';
import HeadDefault from '../../layout/head/HeadDefault';
import { useUser } from '../../lib/hooks';

const Forms = () => {
  const user = useUser({ redirectTo: '/page/login' });
  return (
    <>
      <HeadDefault
        title="Forms | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="forms">{user && <FormsContainer />}</MainLayout>
    </>
  );
};

export default Forms;
