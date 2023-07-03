import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adam Elaoumari </span>
            from <span className="purple"> Marseille, France.</span>
            <br /> I am in the 3rd year of my studies at Epitech (Programme Grande Ecole)
            in Computer Science. I'm also pedagogical assistant at Epitech Marseille.
            <br />
            Additionally, I am currently a freelancer and associate at <span className="purple"> Dealcover</span>, a startup based in Marseille.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the football stadium (OM)
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Developping side projects
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
