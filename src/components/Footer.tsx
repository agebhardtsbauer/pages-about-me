import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-light">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Created with ❤️ by Alan Gebhardtsbauer</p>
            <p>
              The beauty of building things is undeniable. It's a never ending
              journey of discovery, learning, and evolution.
            </p>
            <a
              href="https://github.com/agebhardtsbauer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
