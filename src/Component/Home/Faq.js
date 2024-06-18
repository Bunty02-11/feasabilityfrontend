import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Collapse
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const darkMode = useDarkMode(false);

    const faqData = [
        {
            question: 'Is weed legal in Vista, California?',
            answer: 'Yes! Ever since the passing of Proposition 64 that regulated cannabis to California in 2018. Cannabis is legal to purchase from licensed dispensaries and delivery services for anyone over the age of 21 or anyone 18 and older with a medical cannabis card.',
        },
        {
            question: 'Does Hello Cannabis offer a delivery service?',
            answer: 'Yes, Hello Cannabis offers a delivery service.',
        },
        {
            question: 'Does Hello Cannabis offer deals and discounts?',
            answer: 'Yes, Hello Cannabis offers various deals and discounts.',
        },
        {
            question: 'How much weed can you buy in Vista, California?',
            answer: 'You can purchase up to 28.5 grams of cannabis and 8 grams of concentrate.',
        },
        {
            question: 'Do I need a medical card to buy cannabis products?',
            answer: 'No, you do not need a medical card to buy cannabis products if you are over the age of 21.',
        },
        {
            question: 'Can I use a debit or credit card at your dispensary?',
            answer: 'Yes, we accept debit and credit cards.',
        },
        {
            question: 'What makes Hello Cannabis Vista different from other dispensaries?',
            answer: 'Hello Cannabis Vista stands out due to its excellent customer service, quality products, and great deals.',
        },
    ];

    const handleToggleAccordion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className={`d-flex justify-content-center align-items-center min-vh-100`} style={{ backgroundColor: darkMode.value ? '#000' : '#f8f9fa', color: darkMode.value ? '#fff' : '#000' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={8}>
                        <h1 className={`text-${darkMode.value ? 'light' : 'dark'} mb-4 text-center`} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>Frequently Asked Questions</h1>
                        {faqData.map((faq, index) => (
                            <Card
                                key={index}
                                className="mb-0"
                                style={{ borderRadius: '15px',border: `0.5px solid ${darkMode.value ? '#fff' : '#000'}`, backgroundColor: darkMode.value ? '#000' : '#fff', color: darkMode.value ? '#fff' : '#000', padding: '10px',  }}
                                onClick={() => handleToggleAccordion(index)}
                            >
                                <Card.Header style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div style={{ fontWeight: 'bold' }}>
                                            {faq.question}
                                        </div>
                                        <div>
                                            <Button
                                                variant="link"
                                                onClick={(e) => { e.stopPropagation(); handleToggleAccordion(index); }}
                                                aria-controls={`faq-${index}`}
                                                aria-expanded={expandedIndex === index}
                                                style={{ color: darkMode.value ? '#fff' : '#000', textDecoration: 'none' }}
                                            >
                                                {expandedIndex === index ? '▲' : '▼'}
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Collapse in={expandedIndex === index}>
                                    <div id={`faq-${index}`}>
                                        <Card.Body>{faq.answer}</Card.Body>
                                    </div>
                                </Collapse>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;
