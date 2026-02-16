import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <Container>
        <Row>

          {/* Brand Section */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">MyBrand</h5>
            <p>
              We build modern web applications using React and Bootstrap.
              Clean design. Responsive layout.
            </p>
          </Col>

          {/* Quick Links */}
          {/* {Something was added} */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="/" className="text-light"><FaFacebook /></a>
              <a href="/" className="text-light"><FaTwitter /></a>
              <a href="/" className="text-light"><FaInstagram /></a>
              <a href="/" className="text-light"><FaGithub /></a>
            </div>
          </Col>

        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} MyBrand. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;