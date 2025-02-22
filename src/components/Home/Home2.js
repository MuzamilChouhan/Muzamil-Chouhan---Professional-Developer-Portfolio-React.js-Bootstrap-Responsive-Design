import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <span className="purple">Blockchain Developer</span> and 
              <span className="purple"> Full-Stack Engineer</span> with a strong focus on building 
              secure, scalable, and user-centric digital solutions.
              <br />
              <br />
              My expertise lies in 
              <span className="purple"> JavaScript, Solidity, Rust, and Go</span>, primarily working 
              on decentralized applications and smart contract development.
              <br />
              <br />
              I am particularly interested in advancing 
              <span className="purple"> Web3 technologies</span> and designing high-performance 
              blockchain solutions.
              <br />
              <br />
              Proficient in <span className="purple">Node.js</span> and modern JavaScript frameworks like 
              <span className="purple"> React.js and Next.js</span>, I focus on building intuitive and 
              efficient front-end and back-end systems.
              <br />
              <br />
              Additionally, my background in UI/UX enables me to craft visually appealing and 
              user-friendly designs, ensuring seamless digital experiences.
            </p>
          </Col>

          {/* Avatar Section */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out</span> and collaborate!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muzamilchouhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/muzamilchouhan_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muzamilchouhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muzamilchouhan_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
