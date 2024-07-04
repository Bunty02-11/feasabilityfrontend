import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { setFormValue, submitForm } from '../../action/formAction';
import { useDispatch, useSelector } from 'react-redux';

const FormContainer = styled.form`
    background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
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
                id="constructionCostRehab"
                name="constructionCostRehab"
                label="Construction Cost of Rehab"
                variant="outlined"
                value={formValues?.constructionCostRehab || ''}
                onChange={(e) => handleInputChange(e, 'constructionCostRehab')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="constructionCostSale"
                name="constructionCostSale"
                label="Construction Cost of Sale"
                variant="outlined"
                value={formValues.constructionCostSale}
               onChange={(e) => handleInputChange(e, 'constructionCostSale')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="sraExpenses"
                name="sraExpenses"
                label="SRA Expenses"
                variant="outlined"
                value={formValues.sraExpenses}
               onChange={(e) => handleInputChange(e, 'sraExpenses')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="extraExpenses"
                name="extraExpenses"
                label="Out of Pocket Expenses"
                variant="outlined"
                value={formValues.extraExpenses}
               onChange={(e) => handleInputChange(e, 'extraExpenses')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="rent"
                name="rent"
                label="Rent Amount"
                variant="outlined"
                value={formValues.rent}
               onChange={(e) => handleInputChange(e, 'rent')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="tenure"
                name="tenure"
                label="Nos. of Months"
                variant="outlined"
                value={formValues.tenure}
               onChange={(e) => handleInputChange(e, 'tenure')}
                required
                fullWidth
                margin="normal"
                darkMode={darkMode.value}
            />
            <StyledTextField
                id="buildingBuildup"
                name="buildingBuildup"
                label="Rate / sft on Building built up"
                variant="outlined"
                value={formValues.buildingBuildup}
               onChange={(e) => handleInputChange(e, 'buildingBuildup')}
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
