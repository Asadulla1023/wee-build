import React, { useState } from 'react'
import styles from "@/styles/burger.module.css"

const Burger = () => {
    const [change, setChange] = useState<boolean>(false)
    return (
        <div className={styles.burger}>
            <div className={!change ? styles.container: styles.change } onClick={(e)=> {
                setChange(!change)
            }}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        </div>
    )
}

export default Burger