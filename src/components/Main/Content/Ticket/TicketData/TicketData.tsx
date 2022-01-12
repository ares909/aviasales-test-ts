import React, { FC } from "react";
import { ticketDataObj } from "../../../../../constants/constants";
import styles from "../Ticket.module.scss";

interface ITicketData {
    data: {
        origin: string;
        destination: string;
        date: string;
        stops: string[];
        duration: number;
    };
}

const TicketData: FC<ITicketData> = ({ data }) => {
    return (
        <div className={styles.routeBlock}>
            {ticketDataObj(data).map((item) => (
                <div className={styles.dataBlock} key={item.header}>
                    <h3 className={styles.dataBlockHeader}>{item.header}</h3>
                    <p className={styles.dataBlockTxt}>{item.data}</p>
                </div>
            ))}
        </div>
    );
};

export default TicketData;
