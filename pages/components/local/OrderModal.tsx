import React, { useEffect } from 'react'
import styles from "@/styles/order.module.css"
import { useRouter } from 'next/router'
interface IOrderProps {
    title: string | undefined,
    price: number | undefined,
    orderOpen: boolean,
    setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const OrderModal = ({ title, price, orderOpen, setOrderOpen }: IOrderProps) => {
    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any): void => {
        e.preventDefault()
        const data = new FormData(e.target)
        const obj = Object.fromEntries(data.entries())
        const post = {
            name: obj.name,
            email: obj.email,
            phoneNumber: obj.phoneNumber,
            selectedTitle: title,
            price: `${price}.000`
        }
        const json = JSON.stringify(post)
        router.push(`https://api.telegram.org/bot6683010545:AAGhQEETPuBY-IVHwppSt3zc2CBEvg4j5o4/sendMessage?chat_id=-968558065&text=${json}`)
        router.push("/")
        setOrderOpen(!orderOpen)
    }

    return (
        <div style={orderOpen === true ? {} : {
            opacity: 0,
            zIndex: -100
        }} className={styles.orderModal}>
            <div className={styles.container}>
                <h3>{title}</h3>
                <p>{price}.000$</p>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Name' required />
                    <input maxLength={13} minLength={9} type="text" name='phoneNumber' placeholder='phoneNumber' required />
                    <input type="email" name='email' placeholder='email' required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default OrderModal