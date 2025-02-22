import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGithub,
  SiAmazonaws,
  SiNotion,
  SiDiscord,
} from "react-icons/si";
import { RiHardDrive2Fill } from "react-icons/ri"; // Hardhat
import { FaCubes } from "react-icons/fa"; // Truffle

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiMacos /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><RiHardDrive2Fill /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaCubes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobeillustrator /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNotion /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDiscord /></Col>
    </Row>
  );
}

export default Toolstack;
