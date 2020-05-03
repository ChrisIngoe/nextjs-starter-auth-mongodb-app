import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TextPage from '../../components/container/page/TextPage';
import HeadDefault from '../../layout/head/HeadDefault';

const Text = () => {
  return (
    <>
      <HeadDefault
        title="Text | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout>
        <TextPage />
      </MainLayout>
    </>
  );
};

export default Text;
