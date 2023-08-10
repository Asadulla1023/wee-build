import React from 'react'
import styles from "@/styles/aboutUs.module.css"
import Image from 'next/image'
import IAdvantages from '@/pages/interfaces/IAdvantages'

const AboutUs: React.FC = () => {

    const advantages: IAdvantages[] = [
        {
            title: "Более 20 специалистов в команде.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта заказчику в готовом виде. ",
            image: "/images/workers.png"
        },
        {
            title: "Работаем строго по договору.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта заказчику в готовом виде. ",
            image: "/images/sign.png"
        },
        {
            title: "Гарантия на проделанные работы от 1-3 лет.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
            image: ""
        },
        {
            title: "Выполнение в срок.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
            image: ""
        },
        {
            title: "Бригада профессиональных мастеров.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
            image: ""
        },
        {
            title: "Прозрачность.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
            image: ""
        },
        {
            title: "Предварительный расчет стоимости.",
            desc: "Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта",
            image: ""
        }
    ]

    return (
        <div id='advantages' className={styles.aboutUs}>
            <div className={styles.container}>
                <h1>У нас:</h1>
                <div className={styles.wrapper}>
                    {advantages.map(({ title, desc, image }: IAdvantages) => {
                        return <div key={title} className={image === "" ? styles.advantage: styles.advantageImg}>
                            {image !== "" ? <>
                                <div className={styles.left}>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                                <div className={styles.right}>
                                    <Image src={image} alt={title} width={270} height={240} />
                                </div>
                            </> : <>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </>}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutUs