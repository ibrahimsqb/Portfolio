import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitness from "../../Assets/Projects/pp3.png";
import ecom from "../../Assets/Projects/pp1.png";
import synDev from "../../Assets/Projects/pp2.png";
import fyp from "../../Assets/Projects/fypBanner.png";
import todo from "../../Assets/Projects/todo.png";
import sintraClone from "../../Assets/Projects/sintraClone.png";
import pl from "../../Assets/Projects/passLock.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={fyp} isBlog={false} title="Ball e Baaz – Final Year Project" description="Developed a comprehensive cricket management platform that allows players and clubs to manage matches, book grounds and umpires, track player statistics, and view personalized performance highlights. Incorporating an AI-powered Decision Review System (DRS) for decision validation using video analysis and ball tracking." demoLink="https://www.linkedin.com/posts/sanaullah-momin-71b774309_ballebaaz-crickettech-sportstechnology-activity-7323045781500846081-6GXd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQrgXgBsAp4usNs_wZTaCYTl51Yvi0uzj8" ghLink="" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={ecom} isBlog={false} title="Tech Vault – Ecommerce Website" description="Developed a full-stack end-to-end e-commerce website using the MERN stack. Implemented secure user authentication and a real-time inventory management. Integrated comprehensive shipping functionalities for efficient order fulfillment and logistics. Also designed a dynamic product catalog and streamlined user interface." ghLink="https://github.com/ibrahimsqb/Ecommerce-Store" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pl}
              isBlog={false}
              title="PassLock – Password Manager"
              description="PassLock is a simple and secure password manager built with React, Tailwind CSS, designed to keep your credentials organized in one place. It features an easy-to-use, responsive interface where you can add, edit, copy, and delete passwords, with data stored locally for quick access and reliability."
              ghLink="https://github.com/ibrahimsqb/passLock-LS"
              demoLink="https://passlock7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={sintraClone} isBlog={false} title="Abc Ai – SintraAI Clone" description="Developed a Sintra AI website clone for a client using React and Tailwind CSS, replicating UI/UX features and ensuring responsive, modern design." ghLink="" demoLink="https://abcai7.netlify.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={synDev} isBlog={false} title="Syndicate-Dev Landing Page " description="Developed a responsive React JS landing page featuring a visually stunning hero section, high-quality assets and gradients, business statistics, reusable feature sections with call-to-action buttons, and testimonials." ghLink="https://github.com/ibrahimsqb/synDev_landingPage" demoLink="https://syndicatedev.netlify.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={todo} isBlog={false} title="SynTask" description="SynTask is a sleek and intuitive to-do list app built with React and Tailwind CSS, designed to help you organize tasks effortlessly. It offers a clean, responsive interface with features to add, edit, and delete tasks in real time. With its modern UI and smooth user experience, staying productive has never been easier." ghLink="https://github.com/ibrahimsqb/SynTask" demoLink="https://syntask777.netlify.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={fitness} isBlog={false} title="Syndicate-Fitness" description="Revolutionized fitness by creating an app designed to keep track and progress of your exercises in your workout routine by tracking number of reps and weight." ghLink="https://github.com/ibrahimsqb/Excercise-Tracking-App" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
