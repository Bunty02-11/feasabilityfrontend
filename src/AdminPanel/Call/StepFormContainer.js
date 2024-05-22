import React, { useState } from 'react';
import Tenentstatement from '../../AdminPanel/FeasabilityForms/TenentStatemen'; // Adjust the path if necessary
import StepsComponent from '../../Stepper/Stepper'; // Adjust the path if necessary
import AreaStatement1 from '../FeasabilityForms/AreaStatement1';
import AreaStatement2 from '../FeasabilityForms/AreaStatement2';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../../Component/Layout/Header/Header';
import Footer from '../../Component/Layout/Footer/Footer';
import DarkMode from '../../Darkmode/Darkmode';
import ProjectAreaCalculations from '../../Pdf';

const StepFormContainer = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (
        <>
        <Header/>
        <Sidebar/>
            <div>
                <StepsComponent activeStep={activeStep} />
                {activeStep === 0 && <Tenentstatement onNext={handleNext} />}
                {activeStep === 1 && <AreaStatement1 onNext={handleNext} onBack={handleBack} />}
                {activeStep === 2 && <AreaStatement2 onNext={handleNext} onBack={handleBack} />}
                {activeStep === 3 && <GeneratePDF onBack={handleBack} />}
            </div>
            <ProjectAreaCalculations/>
            <DarkMode/>
            {/* <Footer/> */}
        </>
    );
};

// Define the GeneratePDF component
const GeneratePDF = ({ onBack }) => (
    <div>
        {/* <h3>Generate PDF</h3>
        <button onClick={onBack}>Back</button>
        <button>Generate PDF</button> */}
    </div>
);

export default StepFormContainer;
