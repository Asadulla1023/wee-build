import React from "react";
import { useEffect, useState } from "react";
import styles from "@/styles/portfolio.module.css";
import ICardProps from "@/pages/interfaces/ICardProps";
import Image from "next/image";
import ICard from "@/pages/interfaces/ICard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
  const objCard: ICard[] = [
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "Законченный проект",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "На рассмотрении",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "Законченный проект",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "Законченный проект",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "На рассмотрении",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
    {
      images: [
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
        "/images/table.png",
      ],
      process: "Законченный проект",
      location: "Ташкент, Чиланзар",
      props: [
        {
          image: "icons/global.svg",
          title: "1000m2",
        },
        {
          image: "icons/watch.svg",
          title: "2 мес.",
        },
        {
          image: "icons/kom.svg",
          title: "2 ком.",
        },
        {
          image: "icons/payme.svg",
          title: "1400$",
        },
      ],
      title: "Дизайн двухкомнатной квартиры",
    },
  ];

  return (
    <div id="portfolio"  data-aos="fade-up" data-aos-duration="500" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.portfolioSection}>
          <div className={styles.portfolioTitle}>
            <h1>Портфолио</h1>
          </div>
          <div className={styles.portfolioCard}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              style={{ width: 1250, paddingBottom: 70 }}
            >
              {objCard.map((e: ICard, index: number) => {
                return (
                  <>
                    {" "}
                    <SwiperSlide>
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
                                <div>
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
                  </>
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
