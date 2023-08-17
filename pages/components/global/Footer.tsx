import React from "react";
import styles from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <Image
              src={"/images/logo.png"}
              width={115}
              height={96}
              alt="logo"
            />
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
            <a href='tel:+998990050300'>+998990050300</a>
          </div>
          <div className={styles.location}>
            <Image
              src={"icons/location.svg"}
              width={21}
              height={25.2}
              alt="locate"
            />
            <Link href="https://www.google.com/maps/place/41%C2%B016'49.6%22N+69%C2%B014'50.5%22E/@41.2804373,69.2447741,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.2804333!4d69.247349?hl=ru-RU&entry=ttu"  target="_blank">
              100059, г.Ташкент, Яккасарайский район, Ул. Шота Руставели, д.58
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
