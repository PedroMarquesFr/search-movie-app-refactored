import React from "react";

import styles from "./Load.module.css";

const Load: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.image}></div>
        <div className={styles.name}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.image}></div>
        <div className={styles.name}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.image}></div>
        <div className={styles.name}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.image}></div>
        <div className={styles.name}></div>
      </section>
    </div>
  );
};

export default Load;
