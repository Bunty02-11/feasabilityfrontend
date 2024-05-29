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
                id="rgArea"
                label="Less: RG Area"
                variant="outlined"
                value={formData.rgArea}
                onChange={(e) => handleChange(e, 'rgArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="less_road_setbackArea"
                label="Less:- Road set back area"
                variant="outlined"
                value={formData.less_road_setbackArea}
                onChange={(e) => handleChange(e, 'less_road_setbackArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="Other_Reservation"
                label="Less: Other Reservations"
                variant="outlined"
                value={formData.Other_Reservation}
                onChange={(e) => handleChange(e, 'Other_Reservation')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="tenementsRequired"
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
                id="roadWidth"
                label="Road Width"
                variant="outlined"
                value={formData.roadWidth}
                onChange={(e) => handleChange(e, 'roadWidth')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
        </FormContainer>
    );
};

export default FormComponent;
