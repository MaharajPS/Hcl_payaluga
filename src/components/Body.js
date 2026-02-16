import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">
                Build Modern Websites with React
              </h1>
              <p className="text-muted mt-3">
                Create responsive and professional web applications using 
                React and Bootstrap. Fast, scalable, and modern.
              </p>
              <Button variant="primary" className="mt-3">
                Get Started
              </Button>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://via.placeholder.com/500x300"
                alt="hero"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Our Features</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Responsive Design</Card.Title>
                  <Card.Text>
                    Fully responsive layouts that work perfectly on all devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Fast Performance</Card.Title>
                  <Card.Text>
                    Optimized components for high speed and performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Modern UI</Card.Title>
                  <Card.Text>
                    Clean and professional user interface design.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call To Action */}
      <section className="bg-dark text-light py-5 text-center">
        <Container>
          <h2 className="fw-bold">Ready to Start Your Project?</h2>
          <p className="mt-3">
            Join us and build something amazing today.
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Body;
