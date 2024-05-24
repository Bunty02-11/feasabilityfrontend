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
        padding: 10px;
        margin: 10px 0;
        border: 1px solid ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
        background-color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
        color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
    }

    button {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid ${({ darkMode }) => (darkMode ? '#000' : '#555')};
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

const FormComponent1 = ({ formData, handleChange, handleSubmit }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    return (
        <FormContainer darkMode={darkMode.value} onSubmit={handleSubmit}>
            <input
                type="text"
                name="plotArea"
                placeholder="Area of the Plot*"
                value={formData.plotArea}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="rgArea"
                placeholder="Less: RG Area*"
                value={formData.rgArea}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="netArea"
                placeholder="Net Area*"
                value={formData.netArea}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="tenementsRequired"
                placeholder="Nos. of tenements required as per density (650/Hectare)*"
                value={formData.tenementsRequired}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="societyOffice"
                placeholder="Nos. of society office required*"
                value={formData.societyOffice}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="amenities"
                placeholder="Balwadi, Welfare + 2 other Amenity*"
                value={formData.amenities}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="totalTenements"
                placeholder="Total Required Tenements & Amenity*"
                value={formData.totalTenements}
                onChange={handleChange}
                required
            />
        </FormContainer>
    );
};

export default FormComponent1;
