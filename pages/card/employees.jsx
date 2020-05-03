import React from 'react';

import MainLayout from '../../layout/MainLayout';
import EmployeeContainer from '../../components/container/card/EmployeeContainer';
import HeadDefault from '../../layout/head/HeadDefault';
import { useUser } from '../../lib/hooks';

const Employees = ({ dispatch, storeLayout, id }) => {
  const user = useUser({ redirectTo: '/page/login' });
  return (
    <>
      <HeadDefault
        title="Employees | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout
        activeLink="employees"
        dispatch={dispatch}
        storeLayout={storeLayout}
      >
        {user && (
          <EmployeeContainer
            dispatch={dispatch}
            storeLayout={storeLayout}
            id={id}
          />
        )}
      </MainLayout>
    </>
  );
};

export default Employees;
