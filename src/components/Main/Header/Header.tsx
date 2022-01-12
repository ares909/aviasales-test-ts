import React from "react";
import logo from "../../../images/header/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
        </header>
    );
};

export default Header;
