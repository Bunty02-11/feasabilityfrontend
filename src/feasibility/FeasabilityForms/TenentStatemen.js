import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { setFormValue, submitForm } from '../../action/formAction';
import { useDispatch, useSelector } from 'react-redux';


const FormContainer = styled.form`
    background-color: ${({ darkMode }) => (darkMode ? 'transparent' : 'transparent')};
    padding: 20px;
    box-shadow: ${({ darkMode }) => (darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 5px rgba(0, 0, 0, 0.2)')};
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

const FormComponent = () => {
    const dispatch = useDispatch();
    const darkMode = useDarkMode(false); // Initialize darkMode state
    const formValues = useSelector((state) => state.form.formValues);
    //console.log(formValues);
    const status = useSelector((state) => state.form.status);

    const handleInputChange = (e, field) => {
        dispatch(setFormValue({ field, value: e.target.value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(formValues));
    };


    return (
        <FormContainer darkMode={darkMode.value} onSubmit={handleFormSubmit}>
            <StyledTextField
                id="plotName"
                label="PlotName"
                variant="outlined"
                value={formValues?.plotName || ''}
                onChange={(e) => handleInputChange(e, 'plotName')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="plotArea"
                label="Area of the Plot"
                variant="outlined"
                value={formValues.plotArea}
                onChange={(e) => handleInputChange(e, 'plotArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="rgArea"
                label="Less: RG Area"
                variant="outlined"
                value={formValues.rgArea}
                onChange={(e) => handleInputChange(e, 'rgArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="less_road_setbackArea"
                label="Less:- Road set back area"
                variant="outlined"
                value={formValues.less_road_setbackArea}
                onChange={(e) => handleInputChange(e, 'less_road_setbackArea')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="Other_Reservation"
                label="Less: Other Reservations"
                variant="outlined"
                value={formValues.Other_Reservation}
                onChange={(e) => handleInputChange(e, 'Other_Reservation')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="tenementsRequired"
                label="Nos. of existing tenements"
                variant="outlined"
                value={formValues.tenementsRequired}
                onChange={(e) => handleInputChange(e, 'tenementsRequired')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="roadWidth"
                label="Road Width"
                variant="outlined"
                value={formValues.roadWidth}
                onChange={(e) => handleInputChange(e, 'roadWidth')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="landRate"
                label="Land Rate"
                variant="outlined"
                value={formValues.landRate}
                onChange={(e) => handleInputChange(e, 'landRate')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
        </FormContainer>
    );
};

export default FormComponent;
