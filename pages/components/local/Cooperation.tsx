import React from "react";
import styles from "@/styles/cooperation.module.css";
import { v4 as uuidv4 } from 'uuid';
const Cooperation = () => {
  return (
    <div id="coop" className={styles.cooperation}>
      <div className={styles.container}>
        <div className={styles.cooperationSection}>
          <div className={styles.cooperationTitle}>
            <h1>СОТРУДНИЧЕСТВО</h1>
          </div>
          <div className={styles.cooperationCard}>
            {[1, 2, 3, 4].map((e) => {
              return (
                <div key={uuidv4()} className={styles.card}>
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
