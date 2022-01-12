import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setFilter } from "../../../store/slices/ticketSlice";
import Button from "../Button/Button";
import { buttonNames } from "../../../constants/constants";
import styles from "./ButtonBar.module.scss";

interface ButtonBarProps {
    setPageSize: (number: number) => void;
}

const ButtonBar: FC<ButtonBarProps> = ({ setPageSize }) => {
    const { name: filterName } = useAppSelector((state) => state.tickets.filters);
    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setPageSize(5);
        dispatch(setFilter({ filters: { name: e.currentTarget.textContent } }));
    };
    return (
        <div className={styles.buttonBar}>
            {buttonNames.map((item) => (
                <Button name={item.name} key={item.id} onClick={handleClick} active={filterName === item.name} />
            ))}
        </div>
    );
};

export default ButtonBar;
