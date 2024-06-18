import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const Boxofmain = () => {
  const navigate = useNavigate();

  const handleClick = (boxNumber) => {
    const isLoggedIn = localStorage.getItem('sessionId') == null;

    if (isLoggedIn) {
      navigate(`/file`); // Redirect to file page with box number as parameter
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  const darkMode = useDarkMode(false);

  const cardStyle = {
    backgroundColor: darkMode.value ? "#fff" : "#000",
    borderColor: darkMode.value ? "#fff" : "#000",
    color: darkMode.value ? "#fff" : "#000",
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    height: '300px',
    borderRadius: '15px',
    margin: '10px', // Reduced margin for less side-to-side spacing
  };

  const coStyle = {
    fontSize: '3rem',
    color: darkMode.value ? "#000" : "#fff"
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '250px',
    height: '250px'
  };

  const cardTextStyle = {
    marginTop: '0.5rem',
    color: darkMode.value ? "#000" : "#fff"
  };

  return (
    <Container className="my-4"> {/* Reduced margin-top and margin-bottom */}
      <Row className="justify-content-start mt-4"> {/* Aligned to the left and reduced margin-top */}
        <Col xs={12} className="text-start"> {/* Aligned text to the left */}
          <h3 className="mb-2 display-6" style={{ color: darkMode.value ? "#fff" : "#000" }}> {/* Reduced margin-bottom */}
            WHAT'S YOUR NEXT MOVE
          </h3>
          <h4 className="mb-3" style={{ fontSize: "1.25rem", color: darkMode.value ? "#fff" : "#000" }}> {/* Reduced margin-bottom */}
            VIEW OUR FEATURED LISTINGS
          </h4>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3"> {/* Reduced margin-bottom */}
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(5)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(5)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(7)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(7)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(9)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(9)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(10)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(10)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(11)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(11)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="mb-3"> {/* Reduced margin-bottom */}
          <Card style={cardStyle} onClick={() => handleClick(19)}>
            <Card.Body style={cardBodyStyle}>
              <h1 style={coStyle}>33(19)</h1>
              <p style={cardTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae purus consequat dignissim.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Boxofmain;
