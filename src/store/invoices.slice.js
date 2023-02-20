import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const getInvoices = createAsyncThunk(
    
    'invoices/getInvoices',
    async function () {
        const res = await axios.get("http://167.235.158.238:3001/invoices/");
        return res.data
    }
)

export const { actions: invoicesActions, reducer: invoicesReducer } = createSlice({
    name: "invoices",
    initialState: {
        invoices: [],
        loading: false
    },
    reducers: {
        setInvoices: (state, action) => {
            state.invoices = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInvoices.fulfilled, (state, action) => {
            state.invoices = action.payload;
            state.loading = false;
        })
        builder.addCase(getInvoices.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getInvoices.rejected, (state, action) => {
            // if (action.payload) {
            //     state.error = action.payload.errorMessage
                console.log('eror redux')
            // } else {
            //     state.error = action.error.message
            // }
        })
    }
}
)
