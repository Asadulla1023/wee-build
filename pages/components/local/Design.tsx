import React from "react";
import styles from "@/styles/design.module.css";
import ICardProps from "@/interfaces/ICardProps";
import Image from "next/image";
import ICard from "@/interfaces/ICard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CARD_OBJECT, CARD_OBJECT_DESIGN } from "@/constant";
import { v4 as uuidv4 } from "uuid";
const Design = () => {
  return (
    <div id="design" className={styles.design}>
      <div className={styles.container}>
        <div className={styles.designSection}>
          <div className={styles.designTitle}>
            <h1>ДИЗАЙН</h1>
            <p>
              Наша команда профессиональных дизайнеров разработают дизайн проект
              Вашего помещения по Вашему желанию. При заказе услуги Платинум,
              дизайн в подарок
            </p>
          </div>
          <div className={styles.designCard}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              breakpoints={{
                1250: {
                  width: 1250,
                  slidesPerView: 3,
                },
                976: {
                  width: 976,
                  slidesPerView: 2,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },

                620: {
                  width: 620,
                  slidesPerView: 2,
                },

                380: {
                  width: 380,
                  slidesPerView: 1,
                },
              }}
              pagination={{ clickable: true }}
              style={{ paddingBottom: 70 }}
              className={styles.swiper}
            >
              {CARD_OBJECT_DESIGN.map((e: ICard, index: number) => {
                const id = uuidv4();
                return (
                  <div key={id}>
                    <SwiperSlide key={index}>
                      <div className={styles.card} key={index}>
                        <div className={styles.image}>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {e.images.map((image: string) => {
                              const id = uuidv4();
                              return (
                                <SwiperSlide key={id}>
                                  <Image
                                    src={image}
                                    width={380}
                                    height={246}
                                    alt="wefwef"
                                  />
                                  <div className={styles.process}>
                                    <p>{e.process}</p>
                                  </div>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                        <div className={styles.cardSection}>
                          <h1 className={styles.cardTitle}>{e.title}</h1>
                          <div className={styles.global}>
                            {e.props.map((prop: ICardProps) => {
                              const id = uuidv4();
                              return (
                                <div key={id}>
                                  <Image
                                    src={prop.image}
                                    width={41}
                                    height={40}
                                    alt={prop.title}
                                  />
                                  <p>{prop.title}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
