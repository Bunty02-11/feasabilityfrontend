import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const FormContainer = styled.form`
    background-color: ${({ darkMode }) => (darkMode ? 'transparent' : 'transparent')};
    padding: 20px;
    box-shadow: ${({ darkMode }) => (darkMode ? '0 0 10px rgba(255, 255, 255, 02)' : '0 0 5px rgba(0, 0, 0, 02)')};
    border-radius: 10px;
    margin: 20px auto;

    input {
        background-color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
        color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }

    button {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid ${({ darkMode }) => (darkMode ? '#fff' : '#555')};
        border-radius: 5px;
        background-color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
        color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
        cursor: pointer;
        width: 100%;
    }

    button:disabled {
        background-color: #ccc;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }
`;

const StyledTextField = styled(TextField)`
    & .MuiInputBase-root {
        background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
        color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }
    & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }
    & .MuiInputLabel-root {
        color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }
`;

const FormComponent = ({ formData, handleChange, handleSubmit }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    return (
        <FormContainer darkMode={darkMode.value} onSubmit={handleSubmit}>
           <StyledTextField
                id="constructionCostRehab"
                label="Construction Cost of Rehab"
                variant="outlined"
                value={formData.constructionCostRehab}
                onChange={(e) => handleChange(e, 'constructionCostRehab')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="constructionCostSale"
                label="Construction Cost of Sale"
                variant="outlined"
                value={formData.constructionCostSale}
                onChange={(e) => handleChange(e, 'constructionCostSale')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="sraExpenses"
                label="SRA Expenses"
                variant="outlined"
                value={formData.sraExpenses}
                onChange={(e) => handleChange(e, 'sraExpenses')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="extraExpenses"
                label="Out of Pocket Expenses"
                variant="outlined"
                value={formData.extraExpenses}
                onChange={(e) => handleChange(e, 'extraExpenses')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="rentAmount"
                label="Rent Amount"
                variant="outlined"
                value={formData.rentAmount}
                onChange={(e) => handleChange(e, 'rentAmount')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="tenure"
                label="Nos. of Months"
                variant="outlined"
                value={formData.tenure}
                onChange={(e) => handleChange(e, 'tenure')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="buildingBuiltUp"
                label="Rate / sft on Building built up"
                variant="outlined"
                value={formData.buildingBuiltUp}
                onChange={(e) => handleChange(e, 'buildingBuiltUp')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
        </FormContainer>
    );
};

export default FormComponent;
