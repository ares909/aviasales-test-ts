import React, { FC, useEffect, useMemo, useState } from "react";
import Ticket from "../Ticket/Ticket";
import ButtonBar from "../../ButtonBar/ButtonBar";
import Button from "../../Button/Button";
import { Iticket } from "../../../../models/Ticket";
import { indexedArray } from "../../../../utils/dataFormatters";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { setSortedArray } from "../../../../store/slices/ticketSlice";
import filterTickets from "../../../../utils/filter";
import styles from "./TicketContainer.module.scss";
import AddButton from "../AddButton/AddButton";

interface TickerContainerProps {
    tickets: Iticket[];
}

const TicketContainer: FC<TickerContainerProps> = ({ tickets }) => {
    const dispatch = useAppDispatch();
    const { name: filterName } = useAppSelector((state) => state.tickets.filters);
    const stops = useAppSelector((state) => state.tickets.stops);
    const currentTableData = useAppSelector((state) => state.tickets.sorted);
    const [pageSize, setPageSize] = useState(5);
    const changePageSize = () => {
        setPageSize(() => pageSize + 5);
    };

    useEffect(() => {
        let filteredArray = tickets && indexedArray(tickets);

        switch (filterName) {
            case "Самый дешевый": {
                // setPageSize(5);
                if (stops.includes("all")) {
                    filteredArray = filteredArray.sort((a, b) => (a.price > b.price ? 1 : -1)).slice(0, pageSize);
                } else {
                    filteredArray = filterTickets(filteredArray, stops)
                        .sort((a, b) => (a.price > b.price ? 1 : -1))
                        .slice(0, pageSize);
                }

                dispatch(setSortedArray({ sorted: filteredArray }));
                break;
            }
            case "Самый быстрый": {
                // setPageSize(5);
                if (stops.includes("all")) {
                    filteredArray = filteredArray
                        .sort((a, b) =>
                            a.segments[0].duration + a.segments[1].duration >
                            b.segments[0].duration + b.segments[1].duration
                                ? 1
                                : -1,
                        )
                        .slice(0, pageSize);
                } else {
                    filteredArray = filterTickets(filteredArray, stops)
                        .sort((a, b) =>
                            a.segments[0].duration + a.segments[1].duration >
                            b.segments[0].duration + b.segments[1].duration
                                ? 1
                                : -1,
                        )
                        .slice(0, pageSize);
                }

                dispatch(setSortedArray({ sorted: filteredArray }));
                break;
            }

            case "Оптимальный": {
                if (stops.includes("all")) {
                    filteredArray = filteredArray
                        .sort((a, b) =>
                            a.price > b.price &&
                            a.segments[0].duration + a.segments[1].duration >
                                b.segments[0].duration + b.segments[1].duration
                                ? 1
                                : -1,
                        )
                        .slice(0, pageSize);
                } else {
                    filteredArray = filterTickets(filteredArray, stops)
                        .sort((a, b) =>
                            a.price > b.price &&
                            a.segments[0].duration + a.segments[1].duration >
                                b.segments[0].duration + b.segments[1].duration
                                ? 1
                                : -1,
                        )
                        .slice(0, pageSize);
                }

                dispatch(setSortedArray({ sorted: filteredArray }));

                break;
            }

            default: {
                // setPageSize(5);
                filteredArray = filteredArray.slice(0, pageSize);
                dispatch(setSortedArray({ sorted: filteredArray }));
            }
        }
    }, [pageSize, tickets, filterName, stops]);
    return (
        <div className={styles.container}>
            <ButtonBar setPageSize={setPageSize} />
            {currentTableData && currentTableData.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />)}
            <AddButton className={styles.button} name="Показать еще 5 билетов!" onClick={changePageSize} />
        </div>
    );
};

export default TicketContainer;
