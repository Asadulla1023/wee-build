import React from "react";
import styles from "@/styles/cooperation.module.css";

const Cooperation = () => {
  return (
    <div id="coop" className={styles.cooperation}>
      <div className={styles.container}>
        <div className={styles.cooperationSection}>
          <div className={styles.cooperationTitle}>
            <h1>СОТРУДНИЧЕСТВО</h1>
          </div>
          <div className={styles.cooperationCard}>
            {[1, 2, 3, 4].map(() => {
              return (
                <div className={styles.card}>
                  <h1>LOGO</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
