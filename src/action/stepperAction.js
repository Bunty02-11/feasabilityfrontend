// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const initialState = {
  formData: {
    plotArea: '',
    rgArea: '',
    road_setbackArea: '',
    Other_Reservation: '',
    tenementsRequired: '',
    societyOffice: '',
    amenities: '',
    totalTenements: '',
    road_Width: '',
    tenement_perDensity: '',
    netArea: '',
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

export const generatePDF = createAsyncThunk(
  'form/generatePDF',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const { formData } = state.form;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const canvas = await html2canvas(document.ref);
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      

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
