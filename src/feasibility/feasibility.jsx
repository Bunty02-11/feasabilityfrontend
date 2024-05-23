import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../feasibility/Sidebar/Sidebar';
import StepsComponent from '../Stepper/Stepper';
import ProjectAreaCalculations from '../Pdf';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Feasibility = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (
        <Container fluid className="py-3">
            <Row>
                <Col lg={2} md={3} sm={12} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Sidebar />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={7} md={6} sm={12} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <StepsComponent activeStep={activeStep} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={3} sm={12} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <ProjectAreaCalculations />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Feasibility;
