import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/designer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Designer() {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={styles.designer}
      style={{
        backgroundImage: `url(images/bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.container}>
        <h1>Дизайнерский Ремонт под ключ</h1>
        <p>
          Выполним без вашего участия, точно в срок, по договору и фиксированной
          цене
        </p>
        <Link href={"#company"}>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        <button className={styles.buttonHoverAnimation} onClick={() => {
          router.push("#cost")
        }}>ОБСУДИТЬ ПРОЕКТ</button>
      </div>
    </div>
  );
}
