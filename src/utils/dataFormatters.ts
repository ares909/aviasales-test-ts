import { Iticket } from "../models/Ticket";

interface ITicketRoute {
    origin: string;
    destination: string;
}

interface ITicketDates {
    duration: number;
    date: string;
}

interface ITicketTimeFrame {
    startDate: Date;
    endDate: Date;
}
export const ticketRoute = ({ origin, destination }: ITicketRoute) => `${origin} - ${destination}`;
export const ticketDuration = (time: number) => `${Math.round(time / 60)}ч ${time % 60}м`;
export const ticketStartDate = (ticketDate: string) => new Date(Date.parse(ticketDate));
export const ticketEndDate = ({ date, duration }: ITicketDates) =>
    new Date(Date.parse(date) + Math.round(duration * 60000));
export const dateFormatter = new Intl.DateTimeFormat("ru", {
    hour: "2-digit",
    minute: "2-digit",
});
export const ticketTimeFrame = ({ startDate, endDate }: ITicketTimeFrame) =>
    `${dateFormatter.format(startDate)} - ${dateFormatter.format(endDate)}`;

export const stopsNumber = (stops: string[]) => {
    let stopNumberString;
    switch (stops.length) {
        case 0: {
            stopNumberString = `БЕЗ ПЕРЕСАДОК`;
            break;
        }
        case 1: {
            stopNumberString = `1 ПЕРЕСАДКА`;
            break;
        }
        case 2:
        case 3:
        case 4: {
            stopNumberString = `${stops.length} ПЕРЕСАДКИ`;
            break;
        }
        default: {
            stopNumberString = `${stops.length} ПЕРЕСАДОК`;
        }
    }
    return stopNumberString;
};

export const ticketStops = (stops: string[]) => `${stops.join(`, `)}`;
export const priceFormatter = new Intl.NumberFormat("ru", {
    maximumFractionDigits: 0,
});

export const indexedArray = (array: Iticket[]) =>
    array.map((item, i) => {
        return { ...item, id: i + 1 };
    });
