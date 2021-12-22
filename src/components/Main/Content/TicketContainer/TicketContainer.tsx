import React, { FC, useMemo, useState } from "react";
import styles from "./TicketContainer.module.scss";
import { Iticket } from "../../../../models/Ticket";
import Ticket from "../Ticket/Ticket";
import { indexedArray } from "../../../../utils/dataFormatters";

interface TickerContainerProps {
    tickets: Iticket[];
}

const TicketContainer: FC<TickerContainerProps> = ({ tickets }) => {
    const [pageSize, setPageSize] = useState(5);
    const currentTableData = useMemo(() => {
        return tickets && indexedArray(tickets).slice(0, pageSize);
    }, [pageSize, tickets]);
    return (
        <div className={styles.container}>
            {currentTableData && currentTableData.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />)}
        </div>
    );
};

export default TicketContainer;
