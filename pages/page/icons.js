import React from 'react';
import MainLayout from '../../layout/MainLayout';
import IconsPage from '../../components/container/page/IconsPage';
import HeadDefault from '../../layout/head/HeadDefault';

const Icons = () => {
  return (
    <>
      <HeadDefault
        title="Text | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout>
        <IconsPage />
      </MainLayout>
    </>
  );
};

export default Icons;
