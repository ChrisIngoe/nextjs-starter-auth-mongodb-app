import React from 'react';
import nextConnect from 'next-connect';
import database from '../../../middlewares/database';
import ResetPasswordContainer from '../../../components/container/page/ResetPasswordContainer';
import HeadDefault from '../../../layout/head/HeadDefault';
import SingleLayout from '../../../layout/SingleLayout';

const ResetPasswordTokenPage = ({ valid, token }) => {
  return (
    <>
      <HeadDefault
        title="Reset Password | Next.JS with Reactstrap (React dashboard web application)"
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <SingleLayout>
        {valid ? (
          <ResetPasswordContainer token={token} />
        ) : (
          <p>This link may have expired</p>
        )}
      </SingleLayout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const handler = nextConnect();
  handler.use(database);
  await handler.apply(ctx.req, ctx.res);
  const { token } = ctx.query;

  console.log(token);

  const tokenDoc = await ctx.req.db.collection('tokens').findOne({
    token: ctx.query.token,
    type: 'passwordReset',
  });

  return { props: { token, valid: !!tokenDoc } };
}

export default ResetPasswordTokenPage;
