import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiSolidity, SiNextdotjs, SiFirebase, SiPostgresql, SiTypescript, SiMysql, SiRust } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { RiHardDrive2Fill } from "react-icons/ri"; // For Hardhat
import { BiNetworkChart } from "react-icons/bi"; // For Web3.js
import { FaCubes } from "react-icons/fa"; // For Truffle

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSolidity /></Col>
      <Col xs={4} md={2} className="tech-icons"><BiNetworkChart /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaCubes /></Col>
      <Col xs={4} md={2} className="tech-icons"><RiHardDrive2Fill /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRust /></Col>
      <Col xs={4} md={2} className="tech-icons"><TbBrandGolang /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaHtml5 /></Col>
    </Row>
  );
}

export default Techstack;
