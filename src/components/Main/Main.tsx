import React, { FC, useEffect } from "react";
import styles from "./Main.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchSearchId } from "../../store/actions/actions";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const {
        data: ticketData,
        stop,
        status: ticketsStatus,
        error: ticketsError,
    } = useAppSelector((state) => state.tickets.tickets);
    const {
        data: id,
        status: searchIdStatus,
        error: searchIdError,
    } = useAppSelector((state) => state.tickets.searchId);
    useEffect(() => {
        if (searchIdStatus === "idle") {
            dispatch(fetchSearchId());
        }
    }, [searchIdStatus]);
    return <section className={styles.main}></section>;
};

export default Main;
