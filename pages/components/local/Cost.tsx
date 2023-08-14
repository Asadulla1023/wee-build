import React, { useEffect, useState } from 'react'
import styles from "@/styles/cost.module.css"
import Container from '../global/Container'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import MultiRangeSlider from './MultiRangeSlider'
const Cost = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const contoller: number[] = [1, 2, 3, 4]
    const [selected, setSelected] = useState<string>("")
    const [selected2, setSelected2] = useState<string>("")
    const ads: string[] = ["Новостройка", "Вторичка"]
    const ads2: string[] = ["Межкомнатные перегородки", "Демонтаж"]
    const ads3: string[] = ["Стандарт", "Неоклассика", "Классика", "Под дизайн"]
    const [counter, setCounter] = useState<number>(1)
    const [val, setVal] = useState<number>(1)
    const [selectedRoom, setSelectedRoom] = useState<number>(1)
    const [selectedRepair, setSelectedRepair] = useState<string>("")
    return (
        <Container id='cost' >
            {<>
                <div className={styles.content}>
                    <h1>Предварительный расчет стоимости.</h1>
                    {counter === 1 ?
                        <>
                            <div className={styles.controller}>
                                {contoller.map((e: number) => {
                                    return <div key={uuidv4()} className={styles.control}>
                                        {e > 1 ? <div className={styles.line}>
                                            <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                            </svg>
                                        </div> : null}
                                        <div onClick={() => {
                                            setCounter(e)
                                        }} className={styles.circle} style={counter < e ? {
                                            background: "#F2F2F2",
                                            filter: "none"
                                        } : {}}>
                                            {e}
                                        </div>

                                    </div>
                                })}
                            </div>
                            <div className={styles.selection}>
                                <div className={styles.container}>
                                    <h3>Тип помещения</h3>
                                    <div className={styles.checks}>
                                        {ads.map((e: string, index: number) => {
                                            return <div key={e} className={e === selected ? `${styles.checkbox} ${styles.boxShadow}` : styles.checkbox} onClick={() => {
                                                setChecked(!checked)
                                                setSelected(e)
                                            }}>
                                                <Image src={`/images/select${index + 1}.png`} alt='decorate' width={380} height={245} />
                                                <p>{e}</p>
                                            </div>
                                        })}
                                    </div>
                                    <h3>Доп.услуги</h3>
                                    <div className={styles.checks}>
                                        {ads2.map((e: string, index: number) => {
                                            return <div key={e} className={e === selected2 ? `${styles.checkbox} ${styles.boxShadow}` : styles.checkbox} onClick={() => {
                                                setChecked(!checked)
                                                setSelected2(e)
                                            }}>
                                                <Image src={`/images/select${index + 3}.png`} alt='decorate' width={380} height={245} />
                                                <p>{e}</p>
                                            </div>
                                        })}
                                    </div>
                                    <button onClick={() => {
                                        setCounter(counter + 1)
                                    }}>СЛЕДУЮЩИЙ ШАГ</button>
                                </div>
                            </div>
                        </> : counter === 2 ?
                            <>
                                <div className={styles.controller}>
                                    {contoller.map((e: number) => {
                                        const id = uuidv4()
                                        return <div key={id} className={styles.control}>
                                            {e > 1 ? <div className={styles.line}>
                                                <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                </svg>
                                            </div> : null}
                                            <div className={styles.circle} onClick={() => {
                                                setCounter(e)
                                            }} style={counter < e ? {
                                                background: "#F2F2F2",
                                                filter: "none"
                                            } : {}}>
                                                {e}
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className={styles.selection}>
                                    <div className={styles.container}>
                                        <h3>Площадь и количество комнат</h3>
                                        <div className={styles.sectS}>
                                            <div className={styles.sect}>
                                                <h4>Выберите общую площадь квартиры</h4>
                                                <Image src={'/images/livinroom.png'} alt=' image of livin room' width={780} height={387} />
                                                <div className={styles.multiRange}>
                                                    <MultiRangeSlider max={350} min={0} onChange={(num: {
                                                        min: number
                                                        max: number
                                                    }) => { setVal(num.max) }} />
                                                </div>
                                                <div className={styles.val}>{val}м²</div>
                                            </div>
                                            <div className={styles.sect}>
                                                <h4>Количество комнат</h4>
                                                <div className={styles.selectImageOfLivingRoom}>
                                                    {[1, 2, 3, 4, 5, 6].map((iterable: number) => {
                                                        return <div key={uuidv4()} onClick={() => {
                                                            setSelectedRoom(iterable)
                                                        }} className={selectedRoom === iterable ? `${styles.selectImageS} ${styles.selectImage}` : styles.selectImage}>
                                                            <p>{iterable}</p>
                                                        </div>
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                        <button onClick={() => {
                                            setCounter(counter + 1)
                                        }}>СЛЕДУЮЩИЙ ШАГ</button>
                                    </div>
                                </div>
                            </> : counter === 3 ?
                                <>
                                    <div className={styles.controller}>
                                        {contoller.map((e: number) => {
                                            const id = uuidv4()
                                            return <div key={id} className={styles.control}>
                                                {e > 1 ? <div className={styles.line}>
                                                    <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                    </svg>
                                                </div> : null}
                                                <div className={styles.circle} onClick={() => {
                                                    setCounter(e)
                                                }} style={counter < e ? {
                                                    background: "#F2F2F2",
                                                    filter: "none"
                                                } : {}}>
                                                    {e}
                                                </div>

                                            </div>
                                        })}
                                    </div>
                                    <div className={styles.selection}>
                                        <div className={styles.container}>
                                            <h3>Стиль ремонта</h3>
                                            <div className={styles.checks}>
                                                {ads3.map((e: string, index: number) => {
                                                    return <div key={uuidv4()} className={e === selectedRepair ? `${styles.checkboxRep} ${styles.boxShadowRep}` : styles.checkboxRep} onClick={() => {
                                                        setSelectedRepair(e)
                                                    }}>
                                                        <Image src={`/images/repair${index + 1}.png`} alt='decorate' width={244} height={211} />
                                                        <p>{e}</p>
                                                    </div>
                                                })}
                                            </div>
                                            <button onClick={() => {
                                                setCounter(counter + 1)
                                            }}>СЛЕДУЮЩИЙ ШАГ</button>
                                        </div>
                                    </div>
                                </> : counter === 4 ?
                                    <>
                                        <div className={styles.controller}>
                                            {contoller.map((e: number) => {
                                                return <div key={uuidv4()} className={styles.control}>
                                                    {e > 1 ? <div className={styles.line}>
                                                        <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                        </svg>
                                                    </div> : null}
                                                    <div className={styles.circle} onClick={() => {
                                                        setCounter(e)
                                                    }} style={counter < e ? {
                                                        background: "#F2F2F2",
                                                        filter: "none"
                                                    } : {}}>
                                                        {e}
                                                    </div>

                                                </div>
                                            })}
                                        </div>
                                        <div className={styles.selection}>
                                            <div className={styles.container}>
                                                <h3>Итого</h3>
                                                <div className={styles.roomType}><div className={styles.type}>
                                                    </div>
                                                    <div className={styles.adServices}></div>
                                                    </div>
                                                <div className={styles.totalArea}></div>
                                                <div className={styles.rooms}></div>
                                                <div className={styles.styleRepair}></div>
                                            </div>
                                        </div>
                                    </> : null}
                </div></>}

        </Container>
    )
}

export default Cost