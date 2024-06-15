import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../feasibility/Sidebar/Sidebar';
import StepsComponent from '../Stepper/Stepper';
import ProjectAreaCalculations from './Renderpdf/Pdf';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import Pdf2 from './Renderpdf/Pdf2';



const Feasibility = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true); // Show sidebar by default
    const darkMode = useDarkMode();
    const projectAreaRef = useRef(null);

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

                {showSidebar && (
                    <Col lg={2} md={3} sm={12} className="mb-4">
                            <Card style={cardStyle} className="h-100">
                                <Card.Body>
                                    <Sidebar />
                                </Card.Body>
                            </Card>
                    </Col>
                )}

                <Col lg={5} md={6} sm={12} className="mb-4">
                    <Card style={cardStyle} className="h-100">
                        <Card.Body>
                            <StepsComponent
                                activeStep={activeStep}
                                handleNext={handleNext}
                                handlePrevious={handleBack}
                            />
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={5} md={3} sm={12} className="mb-4">
                    <Card style={cardStyle} className="h-100">
                        <Card.Body>
                            {activeStep < 1 ? (
                                <ProjectAreaCalculations formData={formData} ref={projectAreaRef} />
                            ) : (
                                <Pdf2 formData={formData} ref={projectAreaRef} />
                            )}
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Feasibility;
