import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainContainer = () => (
  <Container className="mt-5">
    <Row className="justify-content-center mt-5">
      <Col
        xs={12}
        md={12}
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504903271097-d7e7c7f5f7ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D)",
          padding: "50% 0",
          backgroundSize: "cover",
        }}
      ></Col>
    </Row>
    <Row className="justify-content-center mt-5">
      <Col xs={12} className="text-center">
        <h1 className="mb-3 display-1" style={{ color: "#000" }}>
          Just Do it <span className="mx-5">|</span> Jordan
        </h1>
      </Col>
    </Row>
    <Row className="justify-content-center mt-5">
      <Col
        xs={12}
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg)",
          padding: "50% 0",
          backgroundSize: "cover",
        }}
      ></Col>
    </Row>
    <Row className="justify-content-center mt-5">
      <Col xs={12} className="text-center">
        <h1 className="mb-3 display-1" style={{ color: "#000" }}>
          Just Do it <span className="mx-5">|</span> Jordan
        </h1>
        <h4 className="mb-5" style={{ fontSize: "1.125rem", color: "#000" }}>
          Get ready to feel the responsive energy return of air zoom and all new
          reactX foam
        </h4>
      </Col>
    </Row>
  </Container>
);



const Main = () => {
  return (
    <>
      <MainContainer />
      {/* <Footer /> */}
    </>
  );
};

export default Main;
