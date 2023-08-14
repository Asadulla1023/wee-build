import React, { useEffect, useState } from 'react'
import styles from "@/styles/header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { NAV } from '@/constant'
import Burger from '../local/Burger'
import { v4 as uuidv4 } from 'uuid';
import { Navigation } from '../local/Navigation'
const Header = () => {
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        if (open === true) {
            document.body.style.overflow = "hidden"
        }else {
            document.body.style.overflow = "auto"
        }
    }, [open])
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.png"} alt='wee logo' width={98} height={82} />
                </Link>
                <ul className={styles.navigation}>
                    {NAV.map(({ title, url }) => {
                        return <li key={uuidv4()}>
                            <Link href={url}>{title}</Link>
                        </li>
                    })}
                </ul>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }} onClick={() => {
                    setOpen(!open)
                }}>
                    <Burger />
                </div>
                <Navigation open={open} />
            </div>
        </header>
    )
}

export default Header