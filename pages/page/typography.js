import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TypographyPage from '../../components/container/page/TypographyPage';
import HeadDefault from '../../layout/head/HeadDefault';

const Typography = () => {
  return (
    <>
      <HeadDefault
        title="Typography | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="typography">
        <TypographyPage />
      </MainLayout>
    </>
  );
};

export default Typography;
