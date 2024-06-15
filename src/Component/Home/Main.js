import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import Faq from "./Faq";

const MainContainer = ({ darkMode }) => (
  <Container className="mt-5" style={{ backgroundColor: darkMode.value ? "#000" : "#fff", color: darkMode.value ? "#fff" : "#000" }}>
    <Row className="justify-content-center mt-4">
      <Col
        xs={20}
        md={16}
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D)",
          padding: "25% ",
          backgroundSize: "cover",
          height: "50vh",
        }}
      ></Col>
    </Row>
    <Row className="justify-content-center mt-5">
      <Col xs={12} className="text-center">
        <h3 className="mb-3 display-6" style={{ color: darkMode.value ? "#fff" : "#000" }}>
          WHAT'S YOUR NEXT MOVE
        </h3>
        <h4 className="mb-5" style={{ fontSize: "1.125rem", color: darkMode.value ? "#fff" : "#000" }}>
          VIEW OUR FEATURED LISTINGS
        </h4>
      </Col>
    </Row>
    <Carousel>
      <Carousel.Item>
        <Row className="justify-content-center mt-2">
          <Col xs={12} md={10} lg={10} className="d-flex justify-content-center">
            <Card className="bg-secondary text-white p-4" style={{ backgroundColor: darkMode.value ? "#333" : "#000", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', maxWidth: '1200px' }}>
              <Row className="no-gutters">
                <Col md={8}>
                  <Card.Body>
                    <div className="display-2 text-warning mb-4">“</div>
                    <Card.Text>
                    Sanjay Balraj Dutt (born 29 July 1959)[4] is an Indian actor who works in Hindi cinema in addition to a few Kannada, Tamil, Punjabi and Telugu films.[5][6] In a career spanning over four decades, Dutt has won several accolades and acted in over 135 films.
                    </Card.Text>
                    <div className="font-weight-bold">
                      Sanjay Dutt
                      <div className="text-muted">Indian actor | Alpha Men</div>
                    </div>
                  </Card.Body>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                  <img src="https://res.cloudinary.com/drevcfxu5/image/upload/v1716542002/next4_fszo7t.jpg" className="img-fluid rounded" alt="Alex Nguyen" style={{ borderRadius: '10px', width: '350px' }} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="justify-content-center mt-2">
          <Col xs={12} md={10} lg={10} className="d-flex justify-content-center">
            <Card className="bg-secondary text-white p-4" style={{ backgroundColor: darkMode.value ? "#333" : "#6c757d", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', maxWidth: '1200px' }}>
              <Row className="no-gutters">
                <Col md={8}>
                  <Card.Body>
                    <div className="display-2 text-warning mb-4">“</div>
                    <Card.Text>
                    Vishwanath Patekar (born 1 January 1951), better known as Nana Patekar, is an Indian actor, screenwriter, film maker, and a former Indian Territorial Army officer, mainly working in Hindi and Marathi cinema. He is regarded as one of the finest and influential actors in Indian Cinema, Patekar is recipient of three National Film Awards, four Filmfare Awards and two Filmfare Awards Marathi for his acting performances. He was bestowed with the Padma Shri award in 2013 for his contribution in cinema and arts. 
                    </Card.Text>
                    <div className="font-weight-bold">
                    Nana Patekar
                      <div className="text-muted">Indian actor |  screenwriter</div>
                    </div>
                  </Card.Body>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                  <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="Alex Nguyen" style={{ borderRadius: '10px', width: '250px' }} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="justify-content-center mt-2">
          <Col xs={12} md={10} lg={10} className="d-flex justify-content-center">
            <Card className="bg-secondary text-white p-4" style={{ backgroundColor: darkMode.value ? "#000" : "#fff", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', maxWidth: '1200px' }}>
              <Row className="no-gutters">
                <Col md={8}>
                  <Card.Body>
                    <div className="display-2 text-warning mb-4">“</div>
                    <Card.Text>
                    aikishan Kakubhai Shroff[1] (born 1 February 1957), known by his screen name Jackie Shroff, is an Indian actor and former model from Mumbai, Maharashtra; who primarily works in Hindi film industry. In a career spanning over four decades, he has appeared in over 220 films in 13 languages.[n 1][2][3] He has received several accolades including four Filmfare Awards. Shroff established himself as one of the leading actors of Indian cinema of the 1980s and the 1990s.
                    </Card.Text>
                    <div className="font-weight-bold">
                      Jackie Shroff
                      <div className="text-muted">Indian actor |  former model</div>
                    </div>
                  </Card.Body>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                  <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="Alex Nguyen" style={{ borderRadius: '10px', width: '250px' }} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  </Container>
);

const Main = () => {
  const darkMode = useDarkMode(false); // Initialize darkMode state

  return (
    <>
      <MainContainer darkMode={darkMode} />
      <Faq />
      <style>
        {`
          /* Custom CSS to change button color based on theme mode */
          .carousel-control-prev,
          .carousel-control-next {
            background-color: ${darkMode.value ? "transparent" : "transparent"};
            border: 1px solid ${darkMode.value ? "#fff" : "#000"};
            color: ${darkMode.value ? "white" : "black"};
            width: 20px;
            height: 200px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Custom CSS to change arrow color based on theme mode */
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(${darkMode.value ? "0%" : "100%"});
          }
        `}
      </style>
    </>
  );
};

export default Main;
