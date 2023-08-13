import { NAV } from '@/constant'
import Link from 'next/link'
import React from 'react'
import styles from "@/styles/header.module.css"
import { v4 as uuidv4 } from "uuid"
export const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navContainer}>
                <ul className={styles.navigate}>
                    {NAV.map(({ title, url }) => {
                        return <li key={uuidv4()}>
                            <Link href={url}>{title}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
