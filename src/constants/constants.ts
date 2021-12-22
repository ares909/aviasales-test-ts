import { ITicketData } from "../models/Ticket";
import {
    ticketEndDate,
    ticketRoute,
    ticketStartDate,
    ticketTimeFrame,
    ticketDuration,
    stopsNumber,
    ticketStops,
} from "../utils/dataFormatters";

export const url = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
export const imagePath = process.env.REACT_APP_IMAGE_URL;
export const ticketDataObj = (ticketData: ITicketData) => [
    {
        header: ticketRoute({ origin: ticketData.origin, destination: ticketData.destination }),
        data: ticketTimeFrame({
            startDate: ticketStartDate(ticketData.date),
            endDate: ticketEndDate({ date: ticketData.date, duration: ticketData.duration }),
        }),
    },
    { header: "В ПУТИ", data: ticketDuration(ticketData.duration) },
    { header: stopsNumber(ticketData.stops), data: ticketStops(ticketData.stops) },
];
