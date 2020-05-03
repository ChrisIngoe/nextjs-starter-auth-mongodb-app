import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const BackgroundsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="typography">
            <h1>Backgrounds</h1>
            <Row id="background">
              <Container fluid>
                <div
                  className="d-flex align-items-center mb-2"
                  style={{
                    height: '200px',
                    backgroundImage: 'url(/images/unsplash-stil-336188.jpg)',
                  }}
                  data-overlay="overlay-theme"
                >
                  <h4 className="mx-auto text-light">.overlay-theme</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2"
                  style={{
                    height: '200px',
                    backgroundImage: 'url(/images/unsplash-stil-336188.jpg)',
                  }}
                  data-overlay="overlay-warning"
                >
                  <h4 className="mx-auto text-light">.overlay-warning</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2"
                  style={{
                    height: '200px',
                    backgroundImage: 'url(/images/unsplash-stil-336188.jpg)',
                  }}
                  data-overlay="overlay-secondary"
                >
                  <h4 className="mx-auto text-light">.overlay-secondary</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2"
                  style={{
                    height: '200px',
                    backgroundImage: 'url(/images/unsplash-stil-336188.jpg)',
                  }}
                  data-overlay="overlay-dark"
                >
                  <h4 className="mx-auto text-light">.overlay-dark</h4>
                </div>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BackgroundsPage;
