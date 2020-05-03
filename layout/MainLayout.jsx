import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavLeft from './nav/NavLeft';
import NavBar from './nav/NavBar';
import Footer from './foot/Footer';

function MainLayout(mainProps) {
  const { children, activeLink } = mainProps;

  const wideNav = { width: '240px' };
  const wideContent = { marginLeft: '240px' };

  return (
    <>
      <NavBar />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left" style={wideNav}>
            <NavLeft activeLink={activeLink} />
          </Col>
          <Col className="wrapper-content" style={wideContent}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
