import React from 'react';

import MainLayout from '../../layout/MainLayout';
import TableContainer from '../../components/container/table/TableContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Tables extends React.Component {
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
          title="Tables | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout
          dispatch={dispatch}
          storeLayout={storeLayout}
          activeLink="tables"
        >
          <TableContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Tables;
