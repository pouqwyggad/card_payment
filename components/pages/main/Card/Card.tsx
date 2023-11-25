'use client'

import classes from './Card.module.scss'
import {FC, PropsWithChildren} from "react"
import cn from 'classnames'
import {CardFrontSide} from "@page/main/Card/CardFrontSide/CardFrontSide";
import {CardBackSide} from "@page/main/Card/CardBackSide/CardBackSide";
import {useCard} from "@store/store";

interface CardProps {}

export const Card: FC<PropsWithChildren<CardProps>> = () => {
    const {cardRotate, changeCardRotate} = useCard(state => state);
    const changeRotate = () => changeCardRotate(!cardRotate);

    return (
        <div className={classes.Wrapper}>
            <div
                onClick={changeRotate}
                className={cn(classes.Card, {[classes.Active]: cardRotate})}
            >
                <CardFrontSide/>
                <CardBackSide/>
            </div>
        </div>
    )
}