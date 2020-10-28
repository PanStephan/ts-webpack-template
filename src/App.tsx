import React, { FC } from "react";
import styles from "./App.module.css";

export const App: FC = () => {
    return <p>hello world<span className={styles.span}>!</span></p>;
}