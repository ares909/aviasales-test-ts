import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchSearchId, fetchTickets } from "../../../store/actions/actions";
import { resetTicketError } from "../../../store/slices/ticketSlice";
import TicketContainer from "./TicketContainer/TicketContainer";
import styles from "./Content.module.scss";

const Content = () => {
    const dispatch = useAppDispatch();
    const {
        data: ticketData,
        stop,
        status: ticketsStatus,
        error: ticketsError,
    } = useAppSelector((state) => state.tickets.tickets);
    const {
        data: searchId,
        status: searchIdStatus,
        error: searchIdError,
    } = useAppSelector((state) => state.tickets.searchId);
    useEffect(() => {
        if (searchIdStatus === "idle") {
            dispatch(fetchSearchId());
        }
    }, [searchIdStatus]);

    useEffect(() => {
        if (searchId && ticketsStatus === "idle") {
            dispatch(fetchTickets(searchId));
        } else if (ticketsStatus === "succeeded" && !stop && !ticketsError) {
            dispatch(fetchTickets(searchId));
        } else if (ticketsStatus === "rejected" && ticketsError?.includes("500")) {
            dispatch(resetTicketError());
            dispatch(fetchTickets(searchId));
        }
    }, [searchId, ticketsStatus, stop]);
    return (
        <section>
            <TicketContainer tickets={ticketData} />
        </section>
    );
};

export default Content;
