import React, { useEffect } from "react";
import styles from "@/styles/contact.module.css";
import Image from "next/image";
import Container from "../global/Container";
import Maps from "./Map";
import { v4 as uuidv4 } from 'uuid';
const Contact = () => {

  return (
    <Container id="contact">
      {
        <>
          <div className={styles.questionsSection}>
            <div className={styles.questionsTitle}>
              <h1>ОСТАЛИСЬ ВОПРОСЫ?</h1>
            </div>
            <div className={styles.questionsContact}>
              <div className={styles.questionsLeft}>
                <div>
                  <Maps />
                </div>
                <div className={styles.contactForm}>
                  <div className={styles.card}>
                    <h3>Контакты</h3>
                    <div className={styles.box}>
                      <Image
                        src={"/icons/box.svg"}
                        width={24}
                        height={23}
                        alt="box"
                      />
                      <a href="email:">weebuild.official@gmail.com</a>
                    </div>
                    <div className={styles.call}>
                      <Image
                        src={"/icons/call.svg"}
                        width={23}
                        height={32}
                        alt="call"
                      />
                      <a href="call:">+998990050300</a>
                    </div>
                    <div className={styles.network}>
                      <p>Соц.сети:</p>
                      <div className={styles.icons}>
                        <Image
                          src={"/icons/faceebook.svg"}
                          width={29}
                          height={29}
                          alt="face"
                        />
                        <Image
                          src={"/icons/telegram.svg"}
                          width={29}
                          height={25}
                          alt="face"
                        />
                        <Image
                          src={"/icons/instagram.svg"}
                          width={28}
                          height={28}
                          alt="face"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <h3>Место нахождения</h3>
                    <div className={styles.locate}>
                      <Image
                        src={"/icons/location.svg"}
                        width={21}
                        height={25}
                        alt="locate"
                      />
                      <a href="locate">Шота Руставели 58</a>
                    </div>
                  </div>
                </div>
              </div>
              <form className={styles.form}>
                <h1>ОБРАТНАЯ СВЯЗЬ</h1>
                <div className={styles.inputForm}>
                  <p>Почта</p>
                  <input type="email" />
                </div>
                <div style={{ marginTop: 18 }} className={styles.inputForm}>
                  <p>Номер телефона</p>
                  <input type="text" />
                </div>
                <button className={styles.button}>ОТПРАВИТЬ</button>
              </form>
            </div>
          </div>
        </>
      }
    </Container>
  );
};

export default Contact;
