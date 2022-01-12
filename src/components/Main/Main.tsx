import React, { FC, useEffect } from "react";
import Content from "./Content/Content";
import styles from "./Main.module.scss";
import Header from "./Header/Header";

const Main: FC = () => {
    return (
        <main className={styles.main}>
            <Header />
            <Content />
        </main>
    );
};

export default Main;
