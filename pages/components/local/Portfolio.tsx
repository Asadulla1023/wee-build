import React from "react";
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio.module.css";
import ICardProps from "@/interfaces/ICardProps";
import Image from "next/image";
import ICard from "@/interfaces/ICard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { CARD_OBJECT } from "@/constant";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      data-aos="fade-up"
      data-aos-duration="500"
      className={styles.portfolio}
    >
      <div className={styles.container}>
        <div className={styles.portfolioSection}>
          <div className={styles.portfolioTitle}>
            <h1>Портфолио</h1>
          </div>
          <div className={styles.portfolioCard}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              // slidesPerView={3}
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
                  slidesPerView: 1
                }
              }}
              pagination={{ clickable: true }}
              style={{ paddingBottom: 70 }}
              className={styles.swiper}
            >
              {CARD_OBJECT.map((e: ICard, index: number) => {
                return (
                  <div key={index}>
                    {" "}
                    <SwiperSlide className={styles.addItem}>
                      <div className={styles.card} key={index}>
                        <div className={styles.image}>
                          <div className={styles.process}>
                            <p>{e.process}</p>
                          </div>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {e.images.map((image: string) => {
                              return (
                                <>
                                  <SwiperSlide>
                                    <Image
                                      src={image}
                                      width={380}
                                      height={246}
                                      alt="wefwef"
                                    />
                                  </SwiperSlide>
                                </>
                              );
                            })}
                          </Swiper>
                        </div>
                        <div className={styles.cardSection}>
                          <h1 className={styles.cardTitle}>{e.title}</h1>
                          <div className={styles.location}>
                            <Image
                              src={"icons/local.svg"}
                              width={16}
                              height={20}
                              alt="scs"
                            />
                            <p>{e.location}</p>
                          </div>
                          <div className={styles.global}>
                            {e.props.map((prop: ICardProps) => {
                              return (
                                <div key={prop.title}>
                                  <Image
                                    src={prop.image}
                                    width={41}
                                    height={40}
                                    alt="wefwef"
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

export default Portfolio;
