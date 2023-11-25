import classes from './Button.module.scss'
import {FC, PropsWithChildren} from "react"
import {useCard} from "@store/store";

interface ButtonProps {}

export const Button: FC<PropsWithChildren<ButtonProps>> = () => {
    const {cardData} = useCard(state => state);

    return (
        <button
            className={classes.Button}
            onClick={() => console.log(cardData)}
        >
            Оплатить
        </button>
    )
}