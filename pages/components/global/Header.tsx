import React from 'react'
import styles from "@/styles/header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { NAV } from '@/constant'

const Header = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.png"} alt='wee logo' width={98} height={82} />
                </Link>
                <ul className={styles.navigation}>
                    {NAV.map(({ title, url }) => {
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