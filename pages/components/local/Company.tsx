import React from 'react'
import Image from 'next/image'
import styles from "@/styles/company.module.css"
import Container from '../global/Container'

const Company: React.FC = () => {
    const children =
        <><div className={styles.content}>
            <h1>о компании</h1>
            <p>Замер помещения, разработка дизайн проекта, выполнение всех этапов ремонтно-отделочных работ до сдачи объекта заказчику в готовом виде. Все вопросы по снабжению и организации работ на объекте берем на себя. Тем самым мы поможем Вам сэкономить свое драгоценное время и нервы. А также, избежать возникновения всех не желательных казусов во время ремонтных работ. Минимальные сроки выполнения работ от месяца. Высокое качество работ.</p>
            <Image src="/images/company.png" alt='company' width={1180} height={575} />
        </div></>
    return (
        <Container id='company' >{children}</Container>
    )
}

export default Company