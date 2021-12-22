import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchId, getTickets } from "../../api/api";

export const fetchSearchId = createAsyncThunk("api/fetchSearchId", (_, { rejectWithValue }) => {
    try {
        return getSearchId();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const fetchTickets = createAsyncThunk("api/fetchTickets", (searchId: string, { rejectWithValue }) => {
    try {
        return getTickets(searchId);
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
