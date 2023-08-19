import React, { useEffect, useState } from 'react'
import styles from "@/styles/cost.module.css"
import Container from '../global/Container'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import MultiRangeSlider from './MultiRangeSlider'
import RoundSlider from './RoundSlider';
import { CARD_PRICE } from '@/constant';
import ICardPrice from '@/interfaces/ICardPrice';
import OrderModal from './OrderModal';
import ICardProps from '@/interfaces/ICardProps';
import { useRouter } from 'next/router';

const Cost = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [hovered, setHovered] = useState<boolean>(false)
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
    const [abled, setAbled] = useState(false)
    const [orderOpen, setOrderOpen] = useState(false)
    const [props, setProps] = useState<ICardPrice | undefined>()
    const [overed, setOvered] = useState<string>("")
    const router = useRouter()
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [addPrice, setAddPrice] = useState<number>(0)
    const [addPrice1, setAddPrice1] = useState<number>(0)
    const [addPrice2, setAddPrice2] = useState<number>(0)

    const pushToCostBlock = () => {
        router.push("#cost")
    }
    useEffect(() => {
        if (orderOpen === true) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [orderOpen])


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
                                        {ads.map((e: string, index: number) => {
                                            return <div key={e} className={e === selected ? `${styles.checkbox} ${styles.boxShadow}` : styles.checkbox} onClick={() => {
                                                setSelected(e)
                                            }}>
                                                <Image src={`/images/select${index + 1}.png`} alt='decorate' width={380} height={245} />
                                                <p>{e}</p>
                                            </div>
                                        })}
                                    </div>
                                    <h3>Доп.услуги</h3>
                                    <div className={styles.checks}>
                                        {selected !== "Новостройка" ? ads2.map((e: string, index: number) => {
                                            return <div key={e} className={e === selected2 ? `${styles.checkbox} ${styles.boxShadow}` : styles.checkbox} onClick={() => {
                                                setSelected2(e)
                                                setAddPrice(e === "Межкомнатные перегородки" ? 17 : 17)
                                            }}>
                                                <Image src={`/images/select${index + 3}.png`} alt='decorate' width={380} height={245} />
                                                <p>{e}</p>
                                            </div>
                                        }) : <div className={selected2 === ads2[0] ? `${styles.checkbox} ${styles.boxShadow}` : styles.checkbox} onClick={() => {
                                            setSelected2(ads2[0])
                                            setAddPrice(17)
                                        }}>
                                            <Image src={`/images/select3.png`} alt='decorate' width={380} height={245} />
                                            <p>{ads2[0]}</p>
                                        </div>
                                        }
                                    </div>
                                    <button className={hovered === true ? styles.animate : styles.noneAnimation} onMouseOver={() => {
                                        setHovered(true)
                                    }} onMouseLeave={() => {
                                        setHovered(false)
                                    }} onClick={() => {
                                        setCounter(counter + 1)
                                        pushToCostBlock()
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
                                        <button className={hovered === true ? styles.animate : styles.noneAnimation} onMouseOver={() => {
                                            setHovered(true)
                                        }} onMouseLeave={() => {
                                            setHovered(false)
                                        }} onClick={() => {
                                            setCounter(counter + 1)
                                            pushToCostBlock()
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
                                            <div className={styles.checksRep}>
                                                {ads3.map((e: string, index: number) => {
                                                    return <div key={uuidv4()} className={e === selectedRepair ? `${styles.checkboxRep} ${styles.boxShadowRep}` : styles.checkboxRep} onClick={() => {
                                                        setSelectedRepair(e)
                                                        if (e === "Стандарт") {
                                                            setAddPrice1(0)
                                                        }
                                                        if (e === "Неоклассика") {
                                                            setAddPrice1(0)
                                                        }
                                                        if (e === "Классика") {
                                                            setAddPrice1(0)
                                                        }
                                                        if (e === "Под дизайн") {
                                                            setAddPrice1(0)
                                                            setChecked(true)
                                                        }
                                                    }}>
                                                        <Image src={`/images/repair${index + 1}.png`} alt='decorate' width={244} height={211} />
                                                        <p>{e}</p>
                                                    </div>
                                                })}
                                            </div>
                                            <button className={hovered === true ? styles.animate : styles.noneAnimation} onMouseOver={() => {
                                                setHovered(true)
                                            }} onMouseLeave={() => {
                                                setHovered(false)
                                            }} onClick={() => {
                                                setCounter(counter + 1)
                                                pushToCostBlock()
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
                                            <h3>Итого</h3>
                                            <div className={styles.container2}>
                                                <div className={styles.roomType}><div className={styles.type}>
                                                    <h3>Тип помещения</h3>
                                                    {ads.map((e: string, index: number) => {
                                                        return <div key={uuidv4()} className={e === selected ? styles.checkboxInput : styles.checkboxInput} onClick={() => {
                                                            setSelected(e)
                                                        }}>
                                                            <input style={e === selected ? {
                                                                background: "#46247c"
                                                            } : {}} type="checkbox" />
                                                            <p>{e}</p>
                                                        </div>
                                                    })}
                                                </div>
                                                    <div className={styles.type}>
                                                        <h3>Доп.Услуги</h3>
                                                        {selected !== "Новостройка" ? ads2.map((e: string, index: number) => {
                                                            return <div key={e} className={e === selected2 ? styles.checkboxInput : styles.checkboxInput} onClick={() => {
                                                                setSelected2(e)
                                                                setAddPrice(e === "Межкомнатные перегородки" ? 17 : 17)
                                                            }}>
                                                                <input style={e === selected2 ? {
                                                                    background: "#46247c"
                                                                } : {}} type="checkbox" />
                                                                <p>{e}</p>
                                                            </div>
                                                        }) : <div className={selected2 === ads2[0] ? styles.checkboxInput : styles.checkboxInput} onClick={() => {
                                                            setSelected2(ads2[0])
                                                            setAddPrice(17)
                                                        }}>
                                                            <input onClick={() => {
                                                                setSelected2("")
                                                            }} style={selected2 === "Межкомнатные перегородки" ? {
                                                                background: "#46247c"
                                                            } : {
                                                                background: "#f2f2f2"
                                                            }} type="checkbox" />
                                                            <p>{ads2[0]}</p>
                                                        </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div className={styles.totalArea}>
                                                    <h3>Выберите общую площадь квартиры</h3>
                                                    {<RoundSlider setVal={setVal} val={val} max={350} min={0} />}
                                                </div>
                                                <div className={styles.rooms}>
                                                    <h3>Количество комнат</h3>
                                                    <div onClick={() => {
                                                        setAbled(!abled)
                                                    }} className={styles.seletedRooms}>{selectedRoom}</div>
                                                    <div style={abled === true ? {
                                                        opacity: 1,
                                                        transition: "0.4s",
                                                        zIndex: 100,
                                                        marginTop: "1rem"
                                                    } : {
                                                        opacity: 0,
                                                        transition: "0.4s",
                                                        zIndex: -1000,
                                                    }} className={styles.selectRoom}>
                                                        {[1, 2, 3, 4, 5, 6].map((iterable: number) => {
                                                            return <div key={uuidv4()} onClick={() => {
                                                                setSelectedRoom(iterable)
                                                            }} className={selectedRoom === iterable ? `${styles.selectImageS} ${styles.selectImage}` : styles.selectImage}>
                                                                <p>{iterable}</p>
                                                            </div>
                                                        })}
                                                    </div>
                                                </div>
                                                <div className={styles.roomType}>
                                                    <div className={styles.type}>
                                                        <h3>Стиль ремонта</h3>
                                                        {ads3.map((e: string, index: number) => {
                                                            return <div key={uuidv4()} className={e === selectedRepair ? styles.checkboxInput : styles.checkboxInput} onClick={() => {
                                                                setSelectedRepair(e)
                                                                setAddPrice1(0)
                                                                if (e === "Под дизайн") {
                                                                    setChecked(true)
                                                                }else {
                                                                    setChecked(false)
                                                                }
                                                            }}>
                                                                <input style={e === selectedRepair ? {
                                                                    background: "#46247c"
                                                                } : {}} type="checkbox" />
                                                                <p>{e}</p>
                                                            </div>
                                                        })}
                                                    </div>
                                                    <div className={styles.type}>
                                                        <h3>Дизайн</h3>
                                                        <div className={checked ? styles.checkboxInput : styles.checkboxInput} onClick={() => {
                                                            checked === true ? setChecked(false) : setChecked(true)
                                                            checked === true ? setAddPrice2(15) : setAddPrice2(0)
                                                        }}>
                                                            <input style={checked !== true ? {
                                                                background: '#46247c'
                                                            } : {}} checked={checked} type="checkbox" />
                                                            <p>Нужен</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.cardPriceList}>
                                            {CARD_PRICE.map((prop: ICardPrice) => {
                                                return <div key={uuidv4()} className={styles.cardPriceItem}>
                                                    <Image src={prop.image} width={380} height={245} alt={prop.title} />
                                                    <div className={styles.desc}>
                                                        <h3>{prop.title}</h3>
                                                        <div className={styles.line} />
                                                        <p>{prop.desc}</p>
                                                    </div>
                                                    <button className={overed === prop.title ? styles.animate : styles.noneAnimation} onMouseOver={() => {
                                                        setOvered(prop.title)
                                                    }} onMouseLeave={() => {
                                                        setOvered("")
                                                    }} onClick={() => {
                                                        setOrderOpen(!orderOpen)
                                                        setProps(prop)
                                                        setTotalPrice((prop.price * val) + (addPrice * val) + addPrice2 * val)
                                                    }}>{(prop.price * val) + (addPrice * val) + (addPrice2 * val)}$</button>
                                                </div>
                                            })}
                                        </div>
                                        <OrderModal roomType={selectedRoom} totalPrice={totalPrice} addService={selected2} repStyle={selectedRepair} design={checked} totalArea={`${val}м²`} setOrderOpen={setOrderOpen} price={props?.price} title={props?.title} orderOpen={orderOpen} />
                                    </> : null}
                </div></>}

        </Container>
    )
}

export default Cost