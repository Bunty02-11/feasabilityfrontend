// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// Rest of your Pdf.js code


const initialState = {
  formData: {
    plotName: '',
    plotArea: '',
    rgArea: '',
    less_road_setbackArea: '',
    Other_Reservation: '',
    tenementsRequired: '',
    societyOffice: '',
    amenities: '',
    totalTenements: '',
    roadWidth: '',
    tenement_perDensity: '',
    netArea: '',
    rehabFsi: '',
    rehabComponent: '',
    landRate: '',
    constructionCostRehab: '',
    constructionCostSale: '',
    sraExpenses: '',
    extraExpenses: '',
    rentAmount: '',
    tenure: '',
    buildingBuiltUp: '',    
  },
  activeStep: 0,
  pdfGenerated: false,
};

export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData, thunkAPI) => {
    try {
      // Simulate asynchronous behavior like API call
      // For now, just return the submitted data
      return formData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setActiveStep(state, action) {
      state.activeStep = action.payload;
    },
    resetForm(state) {
      state.formData = initialState.formData;
      state.activeStep = initialState.activeStep;
      state.pdfGenerated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.fulfilled, (state, action) => {
        state.formData = { ...state.formData, ...action.payload };
        state.activeStep = state.activeStep + 1; // Move to next step
      })
  },
});

export const { updateFormData, setActiveStep, resetForm } = formSlice.actions;
export default formSlice.reducer;
