import React, { FC } from "react";
import classNames from "classnames";
import styles from "./CheckBox.module.scss";

interface checkBoxProps {
    name: string;
    value?: string | number;
    id: string;
    checked: boolean;
    onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const Checkbox: FC<checkBoxProps> = ({ name, checked, onChange, id, value }) => {
    const checkboxClassName = classNames({
        [`${styles.checkbox}`]: true,
        [`${styles.checkboxActive}`]: checked,
    });
    return (
        <label className={styles.container}>
            <input type="checkbox" onChange={onChange} className={styles.input} value={value} />
            <svg className={checkboxClassName} aria-hidden="true" viewBox="0 0 15 11" fill="none">
                <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={checked ? "#2196F3" : "#fff"} />
            </svg>
            <p className={styles.labelText}>{name}</p>
        </label>
    );
};

export default Checkbox;
