// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const initialState = {
  formData: {
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

export const generatePDF  = createAsyncThunk(
  'pdf/downloadPDF',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { formData } = state.form; // Assuming you need formData

      // Create a jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Use html2canvas to convert the document body to a canvas
      const canvas = await html2canvas(document.body);

      // Get the image data from the canvas
      const imgData = canvas.toDataURL('image/png');

      // Calculate PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 10, -10, pdfWidth, pdfHeight);

      // Save the PDF
      pdf.save('feasability.pdf');

      return true;
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
      .addCase(generatePDF.fulfilled, (state, action) => {
        state.pdfGenerated = action.payload;
      });
  },
});

export const { updateFormData, setActiveStep, resetForm } = formSlice.actions;
export default formSlice.reducer;
