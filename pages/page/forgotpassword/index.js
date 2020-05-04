import React from 'react';

import SingleLayout from '../../../layout/SingleLayout';
import ForgotPasswordContainer from '../../../components/container/page/ForgotPasswordContainer';
import HeadDefault from '../../../layout/head/HeadDefault';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res } = props.ctx;
  }

  render() {
    const { dispatch, storeLayout } = this.props;
    return (
      <>
        <HeadDefault
          title="Login | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <SingleLayout>
          <ForgotPasswordContainer />
        </SingleLayout>
      </>
    );
  }
}

export default ForgotPassword;
