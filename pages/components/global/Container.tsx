import React from 'react'

import styles from "@/styles/container.module.css"

interface IContainer {
    id: string
    children: any
}

const Container = ({ id, children }: IContainer) => {
    return (
        <div id={id} className={styles.block}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Container