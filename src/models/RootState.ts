import { Iticket } from "./Ticket";

export interface RootState {
    searchId: { data: string; status: "idle" | "loading" | "succeeded" | "rejected"; error: string | null };
    tickets: {
        data: Iticket[];
        status: "idle" | "loading" | "succeeded" | "rejected";
        error: string | null;
        stop: boolean;
    };
}
