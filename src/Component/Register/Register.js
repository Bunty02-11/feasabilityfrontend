import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [organization, setOrganization] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        // console.log('Password:', password);
        navigate('/feasibility');
    };

    return (
        <Container className="p-3">
            <Row className="justify-content-center">
                <Col md={12} className="text-center">
                    <h1 className="mb-3">
                        Now let's make you a Feasibility <br /> Member.
                    </h1>
                    <h4 className="mb-5">
                        We've sent a code at you email-id
                    </h4>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Code*</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <FaEnvelope />
                                </span>
                                <Form.Control
                                    type="text"
                                    placeholder="Code*"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Username*</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <FaUser />
                                </span>
                                <Form.Control
                                    type="text"
                                    placeholder="Username*"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password*</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <FaLock />
                                </span>
                                <Form.Control
                                    type="password"
                                    placeholder="Password*"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Organization</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1">
                                    <FaEnvelope />
                                </span>
                                <Form.Control
                                    type="text"
                                    placeholder="Organization"
                                    value={organization}
                                    onChange={(e) => setOrganization(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                        </Form.Group>

                        <Form.Text className="text-muted">
                            Minimum of 8 characters <br /> Uppercase, Lowercase letters, and one number.
                        </Form.Text>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className="w-100">
                                Continue
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

