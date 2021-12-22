import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchId, fetchTickets } from "../actions/actions";
import { IResponse, Iticket } from "../../models/Ticket";
import { RootState } from "../../models/RootState";

const initialState: RootState = {
    searchId: { data: "", status: "idle", error: null },
    tickets: { data: [], status: "idle", error: null, stop: false },
};

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        resetTicketError(state) {
            return {
                ...state,
                tickets: {
                    data: state.tickets.data,
                    status: initialState.tickets.status,
                    error: initialState.tickets.error,
                    stop: state.tickets.stop,
                },
            };
        },
    },
    extraReducers: {
        [fetchTickets.rejected.type]: (state, action: PayloadAction<{ error: { message: string } }> | any) => {
            state.tickets.status = "rejected";
            state.tickets.error = action.payload ? action.payload.error.message : action.error.message;
        },
        [fetchTickets.pending.type]: (state, action: PayloadAction<{ error: { message: string } }> | any) => {
            state.tickets.status = "loading";
        },
        [fetchTickets.fulfilled.type]: (state, action: PayloadAction<IResponse>) => {
            state.tickets.status = "succeeded";
            state.tickets.data = [...state.tickets.data, ...action.payload.tickets];
            state.tickets.stop = action.payload.stop;
        },
        [fetchSearchId.rejected.type]: (state, action: PayloadAction<{ error: { message: string } }> | any) => {
            state.searchId.status = "rejected";
            state.searchId.error = action.payload ? action.payload.error.message : action.error.message;
        },
        [fetchSearchId.pending.type]: (state, action: PayloadAction<{ error: { message: string } }> | any) => {
            state.searchId.status = "loading";
        },
        [fetchSearchId.fulfilled.type]: (state, action: PayloadAction<{ searchId: string }>) => {
            state.searchId.status = "succeeded";
            state.searchId.data = action.payload.searchId;
        },
    },
});
export const { resetTicketError } = ticketsSlice.actions;
export default ticketsSlice.reducer;
