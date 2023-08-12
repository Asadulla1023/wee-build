import React, { useEffect, useState } from 'react'
import styles from "@/styles/cost.module.css"
import Container from '../global/Container'
import Image from 'next/image'
import MultipleRange from './MultipleRange'
const Cost = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const contoller: number[] = [1, 2, 3, 4]
    const [selected, setSelected] = useState<string>("")
    const [selected2, setSelected2] = useState<string>("")
    const ads: string[] = ["Новостройка", "Вторичка"]
    const ads2: string[] = ["Межкомнатные перегородки", "Демонтаж"]
    const [counter, setCounter] = useState<number>(1)
    return (
        <Container id='cost' >
            {<>
                <div className={styles.content}>
                    <h1>Предварительный расчет стоимости.</h1>
                    {counter === 1 ?
                        <>
                            <div className={styles.controller}>
                                {contoller.map((e: number) => {
                                    return <div key={e} className={styles.control}>
                                        {e > 1 ? <div className={styles.line}>
                                            <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                            </svg>
                                        </div> : null}
                                        <div className={styles.circle} style={counter < e ? {
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
                                        {ads.map((e: string) => {
                                            return <div key={e} className={styles.checkbox}>
                                                <input onClick={() => {
                                                    setChecked(!checked)
                                                    setSelected(e)
                                                }} checked={checked} style={e === selected ? {
                                                    background: "#46247c"
                                                } : {}} type="checkbox" name="" id="" />
                                                <p>{e}</p>
                                            </div>
                                        })}
                                    </div>
                                    <div className={styles.images}>
                                        <Image src={"/images/select1.png"} alt='decorate' width={380} height={245} />
                                        <Image src={"/images/select2.png"} alt='decorate' width={380} height={245} />
                                    </div>
                                    <h3>Доп.услуги</h3>
                                    <div className={styles.checks}>
                                        {ads2.map((e: string) => {
                                            return <div key={e} className={styles.checkbox}>
                                                <input onClick={() => {
                                                    setChecked(!checked)
                                                    setSelected2(e)
                                                }} checked={checked} style={e === selected2 ? {
                                                    background: "#46247c"
                                                } : {}} type="checkbox" name="" id="" />
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
                                        return <div key={e} className={styles.control}>
                                            {e > 1 ? <div className={styles.line}>
                                                <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                </svg>
                                            </div> : null}
                                            <div className={styles.circle} style={counter < e ? {
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
                                                <div className={styles.multiRange}><MultipleRange/></div>
                                            </div>
                                            <div className={styles.sect}>
                                                <h4>Количество комнат</h4>
                                                <div></div>
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
                                            return <div key={e} className={styles.control}>
                                                {e > 1 ? <div className={styles.line}>
                                                    <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                    </svg>
                                                </div> : null}
                                                <div className={styles.circle} style={counter < e ? {
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
                                                {ads.map((e: string) => {
                                                    return <div key={e} className={styles.checkbox}>
                                                        <input onClick={() => {
                                                            setChecked(!checked)
                                                            setSelected(e)
                                                        }} checked={checked} style={e === selected ? {
                                                            background: "#46247c"
                                                        } : {}} type="checkbox" name="" id="" />
                                                        <p>{e}</p>
                                                    </div>
                                                })}
                                            </div>
                                            <div className={styles.images}>
                                                <Image src={"/images/select1.png"} alt='decorate' width={380} height={245} />
                                                <Image src={"/images/select2.png"} alt='decorate' width={380} height={245} />
                                            </div>
                                            <h3>Доп.услуги</h3>
                                            <div className={styles.checks}>
                                                {ads2.map((e: string) => {
                                                    return <div key={e} className={styles.checkbox}>
                                                        <input onClick={() => {
                                                            setChecked(!checked)
                                                            setSelected2(e)
                                                        }} checked={checked} style={e === selected2 ? {
                                                            background: "#46247c"
                                                        } : {}} type="checkbox" name="" id="" />
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
                                                return <div key={e} className={styles.control}>
                                                    {e > 1 ? <div className={styles.line}>
                                                        <svg width="78" height="3" viewBox="0 0 78 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <line y1="1.5" x2="78" y2="1.5" stroke={counter < e ? "#E0E0E0" : "#46247c"} stroke-width="3" stroke-dasharray="7 7" />
                                                        </svg>
                                                    </div> : null}
                                                    <div className={styles.circle} style={counter < e ? {
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
                                                <div className={styles.checks}>
                                                    {ads.map((e: string) => {
                                                        return <div key={e} className={styles.checkbox}>
                                                            <input onClick={() => {
                                                                setChecked(!checked)
                                                                setSelected(e)
                                                            }} checked={checked} style={e === selected ? {
                                                                background: "#46247c"
                                                            } : {}} type="checkbox" name="" id="" />
                                                            <p>{e}</p>
                                                        </div>
                                                    })}
                                                </div>
                                                <div className={styles.images}>
                                                    <Image src={"/images/select1.png"} alt='decorate' width={380} height={245} />
                                                    <Image src={"/images/select2.png"} alt='decorate' width={380} height={245} />
                                                </div>
                                                <h3>Доп.услуги</h3>
                                                <div className={styles.checks}>
                                                    {ads2.map((e: string) => {
                                                        return <div key={e} className={styles.checkbox}>
                                                            <input onClick={() => {
                                                                setChecked(!checked)
                                                                setSelected2(e)
                                                            }} checked={checked} style={e === selected2 ? {
                                                                background: "#46247c"
                                                            } : {}} type="checkbox" name="" id="" />
                                                            <p>{e}</p>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </> : null}
                </div></>}

        </Container>
    )
}

export default Cost