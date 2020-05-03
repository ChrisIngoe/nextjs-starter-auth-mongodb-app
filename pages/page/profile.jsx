import React from 'react';

import MainLayout from '../../layout/MainLayout';
import ProfileContainer from '../../components/container/page/ProfileContainer';
import HeadDefault from '../../layout/head/HeadDefault';
import { useUser } from '../../lib/hooks';

const Profile = () => {
  const user = useUser({ redirectTo: '/page/login' });
  return (
    <>
      <HeadDefault
        title="Profile | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <MainLayout activeLink="page.profile">
        {user && <ProfileContainer />}
      </MainLayout>
    </>
  );
};

export default Profile;
