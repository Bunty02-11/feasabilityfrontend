import React from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const StepsComponent = ({ activeStep }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    const containerStyle = {
        marginTop: '-250px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        marginRight: '450px',
        color: darkMode.value ? '#FFF' : '#000',

    };

    const stepContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 30px',
        position: 'relative',
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
        position: 'absolute',
        top: '15px',
        left: 'calc(28% + 68px)',
        width: '100px',
        height: '2px',
        backgroundColor: darkMode.value ? '#FFF' : '#000',
        zIndex: 0,
    };

    const textColorStyle = (step) => ({
        color: activeStep === step ? (darkMode.value ? '#FFF' : '#000') : (darkMode.value ? '#FFF' : '#000'),
    });

    const steps = ['Tenant Statement', 'Area Statement 1', 'Area Statement 2', 'Generate PDF'];

    return (
        <div style={containerStyle}>
            {steps.map((stepLabel, step) => (
                <div key={step} style={stepContainerStyle}>
                    <div style={circleStyle(step)}>{step + 1}</div>
                    <div style={textColorStyle(step)}>{stepLabel}</div>
                    {step < steps.length - 1 && <div style={lineStyle}></div>}
                </div>
            ))}
        </div>
    );
};

export default StepsComponent;
