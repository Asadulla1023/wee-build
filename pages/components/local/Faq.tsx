import React from "react";
import styles from "@/styles/faq.module.css";
import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
const Faq = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number>(0);
  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqSection}>
          <div className={styles.faqTitle}>
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
          </div>
          <div className={styles.faqs}>
            {[1, 2, 3, 4, 5].map((e: number) => {
              const id = uuidv4();
              return (
                <div
                  key={id}
                  onClick={() => {
                    setIsOpened(!isOpened);
                    setIsSelected(e);
                  }}
                  className={styles.faqCard}
                >
                  <div className={styles.faqTop}>
                    <h3>Текст вопроса?</h3>
                    <button
                      onClick={() => {
                        setIsOpened(!isOpened);
                      }}
                    >
                      <Image
                        style={
                          isSelected !== e
                            ? {
                                transform: "rotate(-180deg)",
                              }
                            : {}
                        }
                        src={"icons/chevron.svg"}
                        alt="chevron icon"
                        width={10}
                        height={18}
                      />
                    </button>
                  </div>
                  <p className={isSelected !== e ? styles.dn : styles.just}>
                    Наша команда профессиональных дизайнеров разработают дизайн
                    проект Вашего помещения по Вашему желанию. При заказе услуги
                    Платинум, дизайн в подарок
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
