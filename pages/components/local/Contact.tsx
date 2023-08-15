import React, { useEffect, useRef } from "react";
import styles from "@/styles/contact.module.css";
import Image from "next/image";
import Container from "../global/Container";
import Maps from "./Map";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import axios from "axios";

interface IOrderProps {
  email: string | undefined;
  phone: string | undefined;
  message: string | undefined;
}

const Contact = ({ email, phone, message }: IOrderProps) => {

    const Post = (e: React.FormEvent<HTMLFormElement> | any): void => {
      e.preventDefault()
      const data = new FormData(e.target)
      const obj = Object.fromEntries(data.entries())
      const send = `email: ${obj.email}%0Aphone: ${obj.phone}%0Amessage: ${obj.message}`
      axios({
          method: "post",
          url: `https://api.telegram.org/bot6683010545:AAGhQEETPuBY-IVHwppSt3zc2CBEvg4j5o4/sendMessage?chat_id=-968558065&text=${send}`
      }).then(res => console.log(res.data)).catch(err => console.log(err))
  }



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
                      <a href="https://mail.google.com/mail/u/0/#search/weebuild.official%40gmail.com?compose=new">
                        weebuild.official@gmail.com
                      </a>
                    </div>
                    <div className={styles.call}>
                      <Image
                        src={"/icons/call.svg"}
                        width={23}
                        height={32}
                        alt="call"
                      />
                      <a href="tel:+998990050300">+998990050300</a>
                    </div>
                    <div className={styles.network}>
                      <p>Соц.сети:</p>
                      <div className={styles.icons}>
                        <Link
                          href={
                            "https://www.facebook.com/profile.php?id=100095136643324&mibextid=LQQJ4d"
                          }
                        >
                          <Image
                            src={"/icons/faceebook.svg"}
                            width={29}
                            height={29}
                            alt="face"
                          />
                        </Link>
                        <Link href={"https://t.me/Weebuild"}>
                          <Image
                            src={"/icons/telegram.svg"}
                            width={29}
                            height={25}
                            alt="face"
                          />
                        </Link>
                        <Link
                          href={"https://www.instagram.com/weebuild_official/"}
                        >
                          <Image
                            src={"/icons/instagram.svg"}
                            width={28}
                            height={28}
                            alt="face"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <h3>Место нахождения</h3>
                    <div className={styles.locate}>
                      <Link
                        href={
                          "https://www.google.com/maps/place/41%C2%B016'49.6%22N+69%C2%B014'50.5%22E/@41.2804373,69.2447741,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.2804333!4d69.247349?hl=ru-RU&entry=ttu"
                        }
                      >
                        <Image
                          src={"/icons/location.svg"}
                          width={21}
                          height={25}
                          alt="locate"
                        />
                      </Link>
                      <a href="https://www.google.com/maps/place/41%C2%B016'49.6%22N+69%C2%B014'50.5%22E/@41.2804373,69.2447741,17z/data=!3m1!4b1!4m4!3m3!8m2!3d41.2804333!4d69.247349?hl=ru-RU&entry=ttu">
                        Шота Руставели 58
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={Post} className={styles.form}>
                <h1>ОБРАТНАЯ СВЯЗЬ</h1>
                <div className={styles.inputForm}>
                  <p>Почта</p>
                  <input name="email" type="email" />
                </div>
                <div style={{ marginTop: 10 }} className={styles.inputForm}>
                  <p>Номер телефона</p>
                  <input name="phone" type="text" />
                </div>
                <div style={{ marginTop: 10 }} className={styles.inputForm}>
                  <p>Cообщение</p>
                  <textarea name="message" className={styles.textarea} />
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
