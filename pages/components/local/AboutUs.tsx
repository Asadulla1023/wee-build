import React, { useEffect } from 'react'
import styles from "@/styles/aboutUs.module.css"
import Image from 'next/image'
import IAdvantages from '@/interfaces/IAdvantages'
import { ADVANTAGES } from '@/constant'
import { v4 as uuidv4 } from 'uuid';
const AboutUs: React.FC = () => {
    return (
        <div id='advantages' className={styles.aboutUs}>
            <div className={styles.container}>
                <h1>У нас:</h1>
                <div className={styles.wrapper}>
                    {ADVANTAGES.map(({ title, desc, image }: IAdvantages) => {
                        return <div key={uuidv4()} className={image === "" ? styles.advantage : styles.advantageImg}>
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