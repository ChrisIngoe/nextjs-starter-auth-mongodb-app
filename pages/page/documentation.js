import React from 'react';
import MainLayout from '../../layout/MainLayout';
import DocumentationPage from '../../components/container/page/DocumentationPage';
import HeadDefault from '../../layout/head/HeadDefault';

const Documentation = () => {
  return (
    <>
      <HeadDefault
        title="Documentation | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout>
        <DocumentationPage />
      </MainLayout>
    </>
  );
};

export default Documentation;
