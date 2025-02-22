import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images (replace with actual paths)
import bubblePop from "../../Assets/Projects/bubblePop.png";
import todoApp from "../../Assets/Projects/todoApp.png";
import fiverrReloader from "../../Assets/Projects/fiverrReloader.png";
import artWaves from "../../Assets/Projects/artWaves.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bubblePop}
              isBlog={false}
              title="Bubble Pop Game (@bubblespopgamesbot)"
              description="A fun and interactive Bubble Pop game that offers an exciting gaming experience with dynamic gameplay."
              ghLink="https://github.com/MuzamilChouhan/Bubbles-Pop-Game-Bot-and-WebApp"
              demoLink="https://bubblespopgame.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Advanced To-Do App with Context API & Local Storage"
              description="A highly optimized To-Do application using React Context API and Local Storage to manage tasks efficiently."
              ghLink="https://github.com/MuzamilChouhan/Advanced-To-Do-App-with-Context-API-Local-Storage"
              demoLink="https://dailyxtodo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fiverrReloader}
              isBlog={false}
              title="Fiverr X Reloader – Auto Refresh Tool for Fiverr Sellers"
              description="A powerful tool designed to refresh Fiverr gigs automatically to boost visibility and engagement."
              ghLink="https://github.com/MuzamilChouhan/Fiverr-X-Reloader-Auto-Refresh-Tool-for-Fiverr-Sellers"
              demoLink="https://fiverrxreloader.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artWaves}
              isBlog={false}
              title="Art Waves - Digital Art E-commerce Platform"
              description="An e-commerce platform for digital artists to showcase and sell their artwork using React.js and Node.js."
              ghLink="https://github.com/MuzamilChouhan/Art-Waves---Digital-Art-E-commerce-Platform-using-React.Js-Node.js"
              demoLink="https://artwavesxmuzamil.netlify.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
