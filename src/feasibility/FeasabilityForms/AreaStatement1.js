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
                id="plotArea"
                label="Area of the Plot"
                variant="outlined"
                value={formData.plotArea}
                onChange={(e) => handleChange(e, 'plotArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="road_setbackArea"
                label="Less:- Road set back area"
                variant="outlined"
                value={formData.road_setbackArea}
                onChange={(e) => handleChange(e, 'road_setbackArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="road_setbackArea"
                label="Net Area"
                variant="outlined"
                value={formData.road_setbackArea}
                onChange={(e) => handleChange(e, 'road_setbackArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="Add:- Road set back area"
                label=""
                variant="outlined"
                value={formData.Other_Reservation}
                onChange={(e) => handleChange(e, 'Other_Reservation')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="Total  Area for F.S.I."
                label="Nos. of existing tenements"
                variant="outlined"
                value={formData.tenementsRequired}
                onChange={(e) => handleChange(e, 'tenementsRequired')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="road_Width"
                label="F.S.I. Permissible"
                variant="outlined"
                value={formData.road_Width}
                onChange={(e) => handleChange(e, 'road_Width')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
        </FormContainer>
    );
};

export default FormComponent;
