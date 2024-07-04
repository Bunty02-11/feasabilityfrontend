// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk for submitting form data
export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formValues, { rejectWithValue }) => {
    try {
      // First API call for tenement and area data concurrently
      const [tenementResponse, areaResponse] = await Promise.all([
        axios.post('http://localhost:4000/api/add/tenement_statements', {
          plotName: formValues.plotName,
          plotArea: formValues.plotArea,
          lessRGArea: formValues.rgArea,
          lessRoadArea: formValues.less_road_setbackArea,
          lessOtherReservationArea: formValues.Other_Reservation,
          existingTenements: formValues.tenementsRequired,
        }),
        axios.post('http://localhost:4000/api/add/area_statements', {
          roadWidth: formValues.roadWidth,
          landRate: formValues.landRate,
        }),
      ]);

      const tenementStatementId = tenementResponse.data.id;
      const areaStatementId = areaResponse.data.id;

      // Third API call for fesability data
      const fesabilityResponse = await axios.post(
        'http://localhost:4000/api/add/fesability/33/10',
        {
          constructionCostRehab: formValues.constructionCostRehab,
          constructionCostSale: formValues.constructionCostSale,
          sraExpenses: formValues.sraExpenses,
          extraExpenses: formValues.extraExpenses,
          rent: formValues.rent,
          tenure: formValues.tenure,
          buildingBuildup: formValues.buildingBuildup,
          tenementStatementId,
          areaStatementId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        tenementData: tenementResponse.data,
        areaData: areaResponse.data,
        fesabilityData: fesabilityResponse.data,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formValues: {
      plotName: '',
      plotArea: '',
      rgArea: '',
      less_road_setbackArea: '',
      Other_Reservation: '',
      tenementsRequired: '',
      roadWidth: '',
      landRate: '',
      constructionCostRehab: '',
      constructionCostSale: '',
      sraExpenses: '',
      extraExpenses: '',
      rent: '',
      tenure: '',
      buildingBuildup: '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    setFormValue: (state, action) => {
      state.formValues[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setFormValue } = formSlice.actions;

export default formSlice.reducer;
