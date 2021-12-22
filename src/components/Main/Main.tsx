import React, { FC, useEffect } from "react";
import Content from "./Content/Content";
import styles from "./Main.module.scss";

const Main: FC = () => {
    return (
        <main className={styles.main}>
            <Content />
        </main>
    );
};

export default Main;
