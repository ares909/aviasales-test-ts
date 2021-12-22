import { ticketDuration, ticketRoute, ticketStops, ticketTimeFrame } from "../utils/dataFormatters";

export interface Iticket {
    price: number;
    carrier: string;
    id?: number;
    segments: [
        {
            origin: string;
            destination: string;
            date: string;
            stops: string[];
            duration: number;
        },
        {
            origin: string;
            destination: string;
            date: string;
            stops: string[];
            duration: number;
        },
    ];
}

export interface IResponse {
    tickets: Iticket[];
    stop: boolean;
}

export interface ITicketData {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
}
