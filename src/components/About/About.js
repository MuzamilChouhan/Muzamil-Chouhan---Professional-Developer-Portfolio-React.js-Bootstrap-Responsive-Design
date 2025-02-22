import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12} className="pt-4 pb-4">
            <h1 className="project-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={7} className="text-md-start text-center">
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img text-center">
            <img 
              src={laptopImg} 
              alt="about" 
              className="img-fluid" 
              style={{ maxWidth: "90%", height: "auto", paddingTop: "20px" }} 
            />
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col md={12}>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
          </Col>
        </Row>
        <Techstack />

        <Row className="text-center mt-5">
          <Col md={12}>
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I Use
            </h1>
          </Col>
        </Row>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
