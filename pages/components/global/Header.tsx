import React from 'react'
import styles from "@/styles/header.module.css"
import Image from 'next/image'
import Link from 'next/link'

interface INav {
    url: string
    title: string
}

const Header = () => {
    const nav: INav[] = [
        {
            title: "О компании",
            url: "#company"
        },
        {
            title: "Преимущества",
            url: "#advantages"
        },
        {
            title: "Расчет стоимости",
            url: "#cost"
        },
        {
            title: "Портфолио",
            url: "#portfolio"
        },
        {
            title: "Дизайн",
            url: "#design"
        },
        {
            title: "Сотрудничество",
            url: "#coop"
        },
        {
            title: "Блог",
            url: "#blog"
        },
        {
            title: "FAQ",
            url: "#faq"
        },
        {
            title: "Контакты",
            url: "#contact"
        }
    ]
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.png"} alt='wee logo' width={98} height={82} />
                </Link>
                <ul className={styles.navigation}>
                    {nav.map(({ title, url }: INav) => {
                        return <li key={title}>
                            <Link href={url}>{title}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header