import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minishell from "../../Assets/Projects/minishell.png";
import arcade from "../../Assets/Projects/arcade.png";
import myrpg from "../../Assets/Projects/myrpg.png";
import myintra from "../../Assets/Projects/myintra.png";
import marouviere from "../../Assets/Projects/marouviere.png";
import previplus from "../../Assets/Projects/previplus.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myintra}
              isBlog={false}
              title="My Intra"
              description="Android application developped with Flutter, aimed to assist Epitech Students in their scolarity"
              demoLink="https://play.google.com/store/apps/details?id=com.adamlbs.myintra"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={previplus}
              isBlog={false}
              title="Prévi+"
              description="A free app that offers you 100% expert local weather forecasts and real-time alerts ! Developped using Flutter & Firebase"
              demoLink="https://previplus.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marouviere}
              isBlog={false}
              title="Ma Rouvière"
              description="One of my first Android application, created in Java, aimed to help people to find their way in the Rouvière condominium"
              demoLink="https://play.google.com/store/apps/details?id=com.adamlbs.marouviere"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minishell}
              isBlog={false}
              title="Minishell"
              description="A simple shell developped in C as an Epitech project (finished at 100%), with a few builtins and a few commands"
              ghLink="https://github.com/AdamLBS/PSU-Minishell-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myrpg}
              isBlog={false}
              title="My RPG "
              description="A simple RPG game developped in C using the CSFML library."
              ghLink="https://github.com/AdamLBS/my-rpg"
              demoLink="https://uploads.admlbs.fr/rpg.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arcade}
              isBlog={false}
              title="Arcade"
              description="A simple arcade game developped in C++ using the SFML library. All the games act as shared libs, and can be switched at runtime."
              ghLink="https://github.com/AdamLBS/arcade"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
