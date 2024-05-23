import React from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StepsComponent = ({ activeStep }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px', // Adjust this as needed to ensure it doesn't overlap with the header
        color: darkMode.value ? '#FFF' : '#000',
    };

    const circleStyle = (step) => ({
        width: '30px',
        height: '30px',
        backgroundColor: activeStep === step ? (darkMode.value ? '#FFF' : '#000') : '#ccc',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: activeStep === step ? (darkMode.value ? '#000' : '#FFF') : (darkMode.value ? '#FFF' : '#000'),
        zIndex: 1,
    });

    const lineStyle = {
        width: '60px',
        height: '2px',
        backgroundColor: darkMode.value ? '#FFF' : '#000',
        zIndex: 0,
    };

    const textColorStyle = (step) => ({
        color: activeStep === step ? (darkMode.value ? '#FFF' : '#000') : (darkMode.value ? '#FFF' : '#000'),
        marginTop: '10px', // Add some space between the circle and text
        textAlign: 'center',
    });

    const steps = ['Tenant Statement', 'Area Statement 1', 'Area Statement 2', 'Generate PDF'];

    return (
        <div className="container-fluid" style={containerStyle}>
            <div className="row justify-content-center w-100">
                {steps.map((stepLabel, step) => (
                    <div key={step} className="d-flex flex-column align-items-center mx-2">
                        <div style={circleStyle(step)}>{step + 1}</div>
                        <div style={textColorStyle(step)}>{stepLabel}</div>
                        {step < steps.length - 1 && <div style={lineStyle}></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepsComponent;
