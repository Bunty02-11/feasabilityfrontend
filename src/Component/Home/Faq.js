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
        <div className={`bg-${darkMode.value ? '#000' : '#fff'} d-flex justify-content-center align-items-center min-vh-100`}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={`text-${darkMode.value ? 'light' : 'dark'} mb-4`} style={{ fontWeight: 'bold', fontSize: '3rem'}}>Frequently Asked Questions</h1>
                        {faqData.map((faq, index) => (
                            <Card
                                key={index}
                                className="mb-2"
                                style={{ borderRadius: '15px', height: 'auto', marginTop: '10px', backgroundColor: darkMode.value ? '#333' : '#fff', color: darkMode.value ? '#fff' : '#000' }}
                                onClick={() => handleToggleAccordion(index)} // Attach onClick to the whole card
                            >
                                <Card.Header style={{ backgroundColor: 'transparent', border: 'none' }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div style={{ fontWeight: 'bold', borderRadius: '25px' }}>
                                            {faq.question}
                                        </div>
                                        <div>
                                            <Button
                                                variant="link"
                                                onClick={(e) => { e.stopPropagation(); handleToggleAccordion(index); }} // Prevent card click event from toggling
                                                aria-controls={`faq-${index}`}
                                                aria-expanded={expandedIndex === index}
                                                style={{ color: darkMode.value ? '#fff' : '#000', textDecoration: 'none', borderRadius: '25px' }}
                                            >
                                                {expandedIndex === index ? '▲' : '▼'}
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Collapse in={expandedIndex === index}>
                                    <div id={`faq-${index}`}>
                                        <Card.Body style={{ borderRadius: '10px' }}>{faq.answer}</Card.Body>
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
