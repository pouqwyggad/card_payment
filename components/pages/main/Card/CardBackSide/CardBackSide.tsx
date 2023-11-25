import classes from './CardBackSide.module.scss'
import React, {FC, PropsWithChildren} from "react"
import {useCard} from "@store/store";
import {AnimateCVV} from "@ui/AnimateCVV/AnimateCVV";
import {BackSideLines} from "@page/main/Card/CardBackSide/BackSideLines/BackSideLines";
import {focusInputOnCard} from "@utils/setFocusFromCard";

interface CardBackSideProps {
}

export const CardBackSide: FC<PropsWithChildren<CardBackSideProps>> = () => {
    const {name, cvv} = useCard(state => state.cardData);

    return (
        <div className={classes.Container}>

            <span className={classes.TopBlackLine}/>

            <div className={classes.Info}>

                <div className={classes.Name}>{name}</div>

                <div
                    className={classes.CVV}
                    onClick={(e) => focusInputOnCard(e, "i3")}
                >
                    <AnimateCVV
                        className={classes.CVVChars}
                        valueCVV={cvv}
                        charWidth={18}
                        defaultMargin={14}
                    />
                </div>
            </div>

            <BackSideLines className={[classes.Lines, classes.FirstLine, classes.SecondLine]}/>
        </div>
    )
}