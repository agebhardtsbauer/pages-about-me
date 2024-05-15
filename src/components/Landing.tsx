import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <div style={{ paddingTop: "35px" }}>
      <Container
        fluid
        className="p-3 my-3 bg-content-dark text-white text-center"
      >
        <h1>Hello, I'm Alan Gebhardtsbauer!</h1>
        <p>
          I am a software developer passionate about designing and building web
          applications. I love solving problems and learning new technologies.
          Welcome to my website!
        </p>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>
              I graduated from XYZ University with a degree in Computer Science.
              My journey with coding began in high school, when I wrote a
              program to solve a Sudoku puzzle for me. Since then, I've been
              fascinated with the possibilities that coding offers and I've
              dedicated my professional life to it. My core skills include
              React.js, TypeScript and Node.js...
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
