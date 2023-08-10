import React from "react";
import styles from "@/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <Image src={"/images/logo.png"} width={115} height={96} alt="logo" />
          </div>
          <div className={styles.group}>
            <h3>ООО Wee Group.</h3>
            <p>Ташкент ООО</p>
          </div>
          <div className={styles.settings}>
            <p>Все новостройки в вашем городе.</p>
          </div>
          <div className={styles.call}>
            <Image src={"icons/call.svg"} width={21} height={21} alt="call" />
            <a href='"tel:+998990050300'>+998990050300</a>
          </div>
          <div className={styles.location}>
            <Image
              src={"icons/location.svg"}
              width={21}
              height={25.2}
              alt="locate"
            />
            <a href="/">
              100059, г.Ташкент, Яккасарайский район, Ул. Шота Руставели, д.58
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
