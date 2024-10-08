import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weather.jpeg";
import projImg2 from "../assets/img/house.jpeg";
import projImg3 from "../assets/img/bible.jpeg";
import projImg4 from "../assets/img/shop.jpg";
import projImg5 from "../assets/img/book.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "NodeJS",
      imgUrl: projImg1,
      imgLink: "https://weather-app-sable-chi.vercel.app/",
    },
    {
      title: "House Marketplace",
      description: "React + Firebase",
      imgUrl: projImg2,
      imgLink: "https://house-marketplace-rose.vercel.app/",
    },
    {
      title: "Bible Study App",
      description: "ReactJS + NodeJS",
      imgUrl: projImg3,
      imgLink: "https://bible-project-plum.vercel.app/",
    },
    {
      title: "Store Backend",
      description: "Typescript + NodeJS",
      imgUrl: projImg4,
      imgLink: "https://github.com/EmmanuScript/store-backend.git",
    },
    {
      title: "Library App",
      description: "Flask (Python)",
      imgUrl: projImg5,
      imgLink: "https://github.com/EmmanuScript/library_management_system.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the personal projects, I have worked on.
                    Some of these were through learning and others were geared
                    towards applying skills and knowledge outside work
                    experience
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consec</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet con</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
