import React from "react";
import styles from "@/styles/faq.module.css";
import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { MODAL } from "@/constant";
import IModal from "@/interfaces/IModal";
const Faq = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number | null>(0);

  const [isClose, setIsClose] = useState<boolean>(true)

 const MODAL = [
    {
      ques: "Что такое ремонт под ключ?",
      answ: "Ремонт под ключ - это полный комплекс работ, который включает в себя все этапы ремонта помещения, начиная от демонтажа старых материалов и заканчивая установкой мебели и бытовой техники.",
    },
    {
      ques: "Как долго длится ремонт под ключ?",
      answ: "Сроки ремонта зависят от масштаба работ и состояния помещения. Обычно, ремонт под ключ занимает от нескольких недель до нескольких месяцев.",
    },
    {
      ques: "Нужно ли мне самому закупать материалы для ремонта под ключ?",
      answ: "Вы можете закупать материалы самостоятельно, но мы также можем предоставить услугу закупки необходимых материалов.",
    },
    {
      ques: "Какие материалы используются при ремонте под ключ? ",
      answ: "Мы используем только качественные материалы, которые соответствуют требованиям и стандартам. Мы работаем с надежными поставщиками, чтобы гарантировать качество материалов.",
    },
    {
      ques: "Какие гарантии вы предоставляете на ремонт под ключ? ",
      answ: "Мы предоставляем гарантию на все выполненные работы в течение 1-3 год после завершения ремонта. Этот период может варьироваться в зависимости от типа работ.",
    },
    {
      ques: "Каковы условия оплаты за ремонт под ключ?",
      answ: "Мы обсуждаем условия оплаты с каждым клиентом индивидуально. Мы можем предложить различные варианты оплаты, включая оплату поэтапно.",
    },
    {
      ques: "Будет ли мусор убран после ремонта?",
      answ: "Да, мы уберем весь мусор после завершения работ.",
    },
  ];
  

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqSection}>
          <div className={styles.faqTitle}>
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
          </div>
          <div className={styles.quests}>
            {MODAL.map(({ques,answ}, index: number) => {
              return <div key={index} onClick={() => {
                setIsOpened(!isOpened)      
                if(isSelected === index) {
                  setIsSelected(null)
                }else{
                  setIsSelected(index)
                }
              }} className={styles.quest}>
                <div className={styles.questTop}>
                  <h3>{ques}</h3>
                  <button onClick={() => {     
                    setIsOpened(!isOpened)
                  }}>
                    <Image style={isSelected !== index ? {
                      transform: "rotate(-180deg)"
                    } : {}} src={"/icons/chevron.svg"} alt='chevron icon' width={10} height={17} />
                  </button>
                </div>
                <p className={isSelected !== index ? styles.dn : styles.just}>{answ}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
