import React, { useEffect, useState } from "react";
import { resetStops, setStops } from "../../../store/slices/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import CheckBox from "./CheckBox/CheckBox";
import { checkBoxValues } from "../../../constants/constants";
import styles from "./CheckBoxBar.module.scss";

const CheckBoxBar = () => {
    const dispatch = useAppDispatch();
    const stops = useAppSelector((state) => state.tickets.stops);

    const handleChange = (e: { target: HTMLInputElement }) => {
        if (e.target.value === "all") {
            dispatch(resetStops());
        } else if (stops.includes(Number(e.target.value))) {
            dispatch(setStops([...stops.filter((item) => item !== Number(e.target.value))]));
        } else {
            dispatch(setStops([...stops.filter((item) => item !== "all"), Number(e.target.value)]));
        }
    };

    useEffect(() => {
        if (stops.length === 0) {
            dispatch(resetStops());
        }
    }, [stops.length]);
    return (
        <div className={styles.checkBoxBar}>
            <h3 className={styles.barHeader}>Количество пересадок</h3>
            <div className={styles.checkBoxContainer}>
                {checkBoxValues.map((item) => (
                    <CheckBox
                        name={item.name}
                        value={item.value}
                        onChange={handleChange}
                        key={item.id}
                        id={item.id}
                        checked={stops.includes(item.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CheckBoxBar;
