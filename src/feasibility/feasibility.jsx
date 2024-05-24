import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../feasibility/Sidebar/Sidebar';
import StepsComponent from '../Stepper/Stepper';
import ProjectAreaCalculations from './Renderpdf/Pdf';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const Feasibility = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility
    const darkMode = useDarkMode(); // Assume you have a hook or context that provides the dark mode state
    const dispatch = useDispatch();
    const { formData } = useSelector((state) => state.form);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const cardStyle = {
        backgroundColor: 'transparent',
        border: `2px solid ${darkMode.value ? '#fff' : '#000'}`,
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <Container fluid className="py-3">
            <Row>
                <Button variant="outline-dark" className="d-md-none mb-3" onClick={toggleSidebar}>
                    {showSidebar ? 'Close Menu' : 'Open Menu'}
                </Button>
                {/* Sidebar */}
                <Col lg={2} md={3} sm={12} className={`mb-4 ${showSidebar ? 'd-block' : 'd-none d-md-block'}`}>
                    <Card style={cardStyle} className="h-100">
                        <Card.Body>
                            <Sidebar />
                        </Card.Body>
                    </Card>
                </Col>
                {/* Main Content */}
                <Col lg={6} md={6} sm={12} className="mb-4">
                    <Card style={cardStyle} className="h-100">
                        <Card.Body>
                            <StepsComponent activeStep={activeStep} />
                        </Card.Body>
                    </Card>
                </Col>
                {/* Project Area Calculations */}
                <Col lg={4} md={3} sm={12} className="mb-4">
                    <Card style={cardStyle} className="h-100">
                        <Card.Body>
                            <ProjectAreaCalculations formData={formData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Feasibility;
