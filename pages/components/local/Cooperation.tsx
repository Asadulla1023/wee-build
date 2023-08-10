import React from "react";
import styles from "@/styles/cooperation.module.css";

const Cooperation = () => {
  return (
    <div id="coop"  data-aos="fade-up" data-aos-duration="500" className={styles.cooperation}>
      <div className={styles.container}>
        <div className={styles.cooperationSection}>
          <div className={styles.cooperationTitle}>
            <h1>СОТРУДНИЧЕСТВО</h1>
          </div>
          <div className={styles.cooperationCard}>
            {[1, 2, 3, 4].map((e) => {
              return (
                <div key={e} className={styles.card}>
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
