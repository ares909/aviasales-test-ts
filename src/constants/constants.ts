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

export const buttonNames = [
    {
        name: "Самый дешевый",
        id: "cheap",
    },
    {
        name: "Самый быстрый",
        id: "fastest",
    },
    {
        name: "Оптимальный",
        id: "moderate",
    },
];

export const checkBoxValues = [
    { name: "Все", value: "all", id: "all" },
    { name: "Без пересадок", value: 0, id: "null" },
    { name: "1 Пересадка", value: 1, id: "one" },
    { name: "2 Пересадки", value: 2, id: "two" },
    { name: "3 Пересадки", value: 3, id: "three" },
];
