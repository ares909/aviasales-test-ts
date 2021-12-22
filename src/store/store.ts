import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { ticketsSlice } from "./slices/ticketSlice";

export const store = configureStore({
    reducer: {
        tickets: ticketsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
