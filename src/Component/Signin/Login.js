import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { decrypt, encrypt } from '../../lib/encrypt';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../Context';
import Header from '../Layout/Header/Header';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { sessionId, setSessionId } = useContext(SessionContext);
    const navigate = useNavigate();

    const secretKey = 'XXXYTHSRATAV';

    useEffect(() => {
        // Check if user is already logged in
        if (sessionId) {
            navigate('/feasibility');
        }
    }, [sessionId, navigate]);

    const encryptData = (data) => {
        const encrypted = encrypt(data, secretKey);
        return encrypted;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const encryptedEmail = encryptData(email);
        const encryptedPassword = encryptData(password);

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email: encryptedEmail,
                password: encryptedPassword,
            });

            console.log('Response from server:', response);

            if (response.status === 200) {
                const sessionId = response.data.sessionId || response.data; // Adjust based on actual response structure
                console.log('Session ID received:', sessionId);
                const data = decrypt(sessionId.data.sessionId, secretKey);
                console.log(data, 'data');
                if (sessionId) {
                    setSessionId(data); // Set the session ID in the context
                    navigate('/feasibility');
                } else {
                    console.error('Session ID is missing in the response');
                }
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
        }
    };

    return (
        <>
            <Header />
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 className="text-center">Enter your email to join us or sign in.</h1>
                        <h3 className="text-center">India</h3>
                        <Form onSubmit={handleSubmit} className="mb-5">
                            <Form.Group controlId="username">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <div className="text-center mt-4">
                                <Button variant="primary" type="submit">
                                    Continue
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginForm;
