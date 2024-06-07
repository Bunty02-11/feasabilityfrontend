import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../feasibility/Sidebar/Sidebar';
import StepsComponent from '../Stepper/Stepper';
import ProjectAreaCalculations from './Renderpdf/Pdf';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import styles for react-resizable
import Pdf2 from './Renderpdf/Pdf2';

const Feasibility = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [showSidebar, setShowSidebar] = useState(true); // Show sidebar by default
    const darkMode = useDarkMode();
    const dispatch = useDispatch();
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
                        <ResizableBox
                            width={200} // Initial width of the sidebar
                            height={Infinity}
                            axis="x"
                            minConstraints={[150, Infinity]}
                            maxConstraints={[400, Infinity]}
                            style={{ height: '100%' }}
                        >
                            <Card style={cardStyle} className="h-100">
                                <Card.Body>
                                    <Sidebar />
                                </Card.Body>
                            </Card>
                        </ResizableBox>
                    </Col>
                )}

                <Col lg={6} md={6} sm={12} className="mb-4">
                        <Card style={cardStyle} className="h-100">
                            <Card.Body>
                                <StepsComponent activeStep={activeStep} />
                            </Card.Body>
                        </Card>
                </Col>

                <Col lg={4} md={3} sm={12} className="mb-4">
                        <Card style={cardStyle} className="h-100">
                            <Card.Body>
                                <ProjectAreaCalculations formData={formData} ref={projectAreaRef} />
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg={6} md={3} sm={12} className="mb-4">
                        <Card style={cardStyle} className="h-100">
                            <Card.Body>
                                <Pdf2 formData={formData} ref={projectAreaRef} />
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Feasibility;
