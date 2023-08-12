import React, { useEffect } from 'react'
import styles from "@/styles/aboutUs.module.css"
import Image from 'next/image'
import IAdvantages from '@/interfaces/IAdvantages'
import Aos from 'aos'
import { ADVANTAGES } from '@/constant'
const AboutUs: React.FC = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id='advantages' data-aos="fade-up" data-aos-duration="500" className={styles.aboutUs}>
            <div className={styles.container}>
                <h1>У нас:</h1>
                <div className={styles.wrapper}>
                    {ADVANTAGES.map(({ title, desc, image }: IAdvantages) => {
                        return <div key={title} className={image === "" ? styles.advantage : styles.advantageImg}>
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