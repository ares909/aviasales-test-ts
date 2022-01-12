import React, { FC } from "react";
import TicketData from "./TicketData/TicketData";
import { Iticket } from "../../../../models/Ticket";
import { priceFormatter } from "../../../../utils/dataFormatters";
import { imagePath } from "../../../../constants/constants";
import styles from "./Ticket.module.scss";

interface ticketProps {
    ticket: Iticket;
}
const Ticket: FC<ticketProps> = ({ ticket }) => {
    return (
        <div className={styles.ticketContainer}>
            <div className={styles.ticketHeader}>
                <p className={styles.price}>{`${priceFormatter.format(ticket.price)} Р`}</p>
                <img className={styles.airlineLogo} src={`${imagePath}/${ticket.carrier}.png`} />
            </div>
            <div className={styles.ticketDataContainer}>
                {ticket.segments.map((item, i) => (
                    <TicketData data={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Ticket;
