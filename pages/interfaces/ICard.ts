import ICardProps from "./local/ICardProps"

export default interface ICard {
    images: string[]
    title: string
    location: string
    props: ICardProps[]
}