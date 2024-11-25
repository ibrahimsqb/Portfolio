import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import fitness from "../../Assets/Projects/pp3.png";
import ecom from "../../Assets/Projects/pp1.png";
import suicide from "../../Assets/Projects/suicide.png";
import synDev from "../../Assets/Projects/pp2.png";

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
              imgPath={ecom}
              isBlog={false}
              title="Tech Vault – Ecommerce Website"
              description="Developed a full-stack end-to-end e-commerce website using the MERN stack. Implemented secure user authentication and a real-time inventory management. Integrated comprehensive shipping functionalities for efficient order fulfillment and logistics. Also designed a dynamic product catalog and streamlined user interface."
              ghLink="https://github.com/ibrahimsqb/Ecommerce-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synDev}
              isBlog={false}
              title="Syndicate-Dev Landing Page "
              description="Developed a responsive React JS landing page featuring a visually stunning hero section, high-quality assets and gradients, business statistics, reusable feature sections with call-to-action buttons, and testimonials."
              ghLink="https://github.com/ibrahimsqb/synDev_landingPage"
              demoLink="https://syndicatedev.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Syndicate-Fitness"
              description="Revolutionized fitness by creating an app designed to keep track and progress of your exercises in your workout routine by tracking number of reps and weight."
              ghLink="https://github.com/ibrahimsqb/Excercise-Tracking-App"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
