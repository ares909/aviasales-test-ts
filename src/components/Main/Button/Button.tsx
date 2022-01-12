import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
    name?: string;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    active?: boolean;
}

const Button: FC<ButtonProps> = ({ name, onClick, active }) => {
    const buttonClassName = classNames({
        [`${styles.button}`]: true,
        [`${styles.buttonActive}`]: active,
    });
    return (
        <button className={buttonClassName} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;
