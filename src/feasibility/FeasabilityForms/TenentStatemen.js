import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    background-color: var(--background-color);
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px auto;

    input {
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
    }

    button {
        padding: 10px;
        margin: 10px 0;
        border: none;
        border-radius: 5px;
        background-color: var(--button-background-color);
        color: #fff;
        cursor: pointer;
        width: 100%;
    }

    button:disabled {
        background-color: #ccc;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: var(--text-color);
    }
`;

const FormComponent = ({ formData, handleChange, handleSubmit }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <h2>Tenant Statement</h2>
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
            <button type="submit">Submit</button>
        </FormContainer>
    );
};

export default FormComponent;
