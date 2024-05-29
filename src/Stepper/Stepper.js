import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, updateFormData, setActiveStep } from '../action/stepperAction'; // Adjust path as needed
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import FormComponent from '../feasibility/FeasabilityForms/TenentStatemen';
import FormComponent1 from '../feasibility/FeasabilityForms/AreaStatement1';
import FormComponent2 from '../feasibility/FeasabilityForms/AreaStatement2';
import html2pdf from 'html2pdf.js'; // Import html2pdf

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    &.light {
        --background-color: #fff;
        --button-background-color: #007bff;
        --text-color: #000;
    }

    &.dark {
        --background-color: #2c2c2c;
        --button-background-color: #333;
        --text-color: #fff;
        color: #fff;
    }
`;

const StepperContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

const StepContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 20px;
    position: relative;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    z-index: 1;

    &.active {
        background-color: var(--button-background-color);
        color: #fff;
    }
`;

const Line = styled.div`
    position: absolute;
    top: 15px;
    width: 80px;
    height: 2px;
    background-color: var(--text-color);
    z-index: 0;
`;

const StepLabel = styled.div`
    margin-top: 10px;
    text-align: center;
    color: var(--text-color);

    &.active {
        color: var(--text-color);
    }
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    width: 80%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--button-background-color);
    color: #fff;
    cursor: pointer;

    &:disabled {
        background-color: #ccc;
    }
`;

const StepsComponent = () => {
    const darkMode = useDarkMode(false);
    const dispatch = useDispatch();
    const { formData, activeStep } = useSelector((state) => state.form);

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-container');
        const pdfOptions = {
            filename: 'fesability33(10).pdf', // Optional, default is 'file.pdf'
            jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' }, // Set A3 size
        };
        html2pdf().set(pdfOptions).from(element).save();
    };

    // Define steps
    const steps = ['TENEMENT STATEMENT', 'AREA STATEMENT 1', 'AREA STATEMENT 2' , 'GENERATE PDF'];

    // Define handleChange function
    const handleChange = (e, field) => {
        const { value } = e.target;
        dispatch(updateFormData({ [field]: value }));
    };

    const handleSubmit = (formData) => {
        dispatch(submitForm(formData));
    };

    const handleNext = () => {
        dispatch(setActiveStep(activeStep + 1));
    };

    const handlePrevious = () => {
        dispatch(setActiveStep(activeStep - 1));
    };


    return (
        <Container className={darkMode.value ? 'dark' : 'light'}>
            <StepperContainer>
                {steps.map((stepLabel, step) => (
                    <StepContainer key={step}>
                        <Circle className={activeStep === step ? 'active' : ''}>{step + 1}</Circle>
                        <StepLabel className={activeStep === step ? 'active' : ''}>{stepLabel}</StepLabel>
                        {step < steps.length - 1 && <Line />}
                    </StepContainer>
                ))}
            </StepperContainer>
            <div>
                {activeStep === 0 && (
                    <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                )}
                {activeStep === 1 && (
                    <FormComponent1
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                )}
                {activeStep === 2 && (
                    <FormComponent2
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>

            <ButtonContainer>
                <StyledButton onClick={handlePrevious} disabled={activeStep === 0}>
                    Previous
                </StyledButton>
                {activeStep < steps.length - 1 ? (
                    <StyledButton onClick={handleNext}>
                        Next
                    </StyledButton>
                ) : (
                    <StyledButton onClick={handleDownloadPDF} >
                        Generate PDF
                    </StyledButton>
                )}
            </ButtonContainer>
        </Container>
    );
};

export default StepsComponent;
