import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TextPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="typography">
            <h1>Text</h1>
            <p className="lead">Themes default typography</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              quisquam harum odio. Natus hic quod unde corporis ipsam optio
              voluptas possimus quidem?
            </p>
            <Row id="sub-header">
              <Col lg="3">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
              </Col>
              <Col lg="3">
                <h1 className="font-lead-base">Heading 1</h1>
                <h2 className="font-lead-base">Heading 2</h2>
                <h3 className="font-lead-base">Heading 3</h3>
                <h4 className="font-lead-base">Heading 4</h4>
                <h5 className="font-lead-base">Heading 5</h5>
              </Col>
              <Col lg="3">
                <h1 className="font-head-base">Heading 1 </h1>
                <h2 className="font-head-base">Heading 2</h2>
                <h3 className="font-head-base">Heading 3</h3>
                <h4 className="font-head-base">Heading 4</h4>
                <h5 className="font-head-base">Heading 5</h5>
              </Col>
            </Row>
            <hr />
            <h3>Lead</h3>
            <Row id="sub-lead">
              <Col lg="6">
                <h4>Paragraph Lead</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="6">
                <h4>Blockquote</h4>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </blockquote>
              </Col>
            </Row>
            <h3>Content</h3>
            <Row id="sub-content">
              <Col lg="12">
                <h4>Paragraph Content</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
                <h4>Paragraph Default</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Navigation</h3>
            <Row id="sub-navigation">
              <Col lg="12">
                <h4>Default</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="12">
                <h4>Fixed</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Section</h3>
            <Row id="sub-section">
              <Col lg="12">
                <h4>Section Content</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Carousel</h3>
            <Row id="sub-carousel">
              <Col lg="6">
                <h4>Owl Carousel</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="6">
                <h4>Slick Carousel</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TextPage;
