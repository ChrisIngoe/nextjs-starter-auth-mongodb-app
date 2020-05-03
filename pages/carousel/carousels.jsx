import React from 'react';

import MainLayout from '../../layout/MainLayout';
import CarouselsContainer from '../../components/container/carousel/CarouselsContainer';
import HeadDefault from '../../layout/head/HeadDefault';
import { useUser } from '../../lib/hooks';

const Carousels = () => {
  const user = useUser({ redirectTo: '/page/login' });

  return (
    <>
      <HeadDefault
        title="Carousels | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="carousels">
        {user && <CarouselsContainer />}
      </MainLayout>
    </>
  );
};

export default Carousels;
