import classes from './CardFrontSide.module.scss'
import React, {FC, PropsWithChildren} from "react"
import {ChipIcon} from "@icons/ChipIcon";
import {useCard} from "@store/store";
import {AnimateNumbers} from "@ui/AnimateNumbers/AnimateNumbers";
import {AnimatePresence, motion} from "framer-motion";
import {nameMotion} from "@motions/nameMotion";
import {dateMotion} from "@motions/dateMotion";
import {focusInputOnCard} from "@utils/setFocusFromCard";

interface CardFrontSideProps {
}

export const CardFrontSide: FC<PropsWithChildren<CardFrontSideProps>> = () => {
    const {number, name, year, month} = useCard(state => state.cardData);

    return (
        <div className={classes.Container}>
            <ChipIcon className={classes.Chip}/>

            <div
                onClick={(e) => focusInputOnCard(e, "i1")}
                className={classes.CardNumber}
            >
                <AnimateNumbers
                    className={classes.Numbers}
                    numbers={number}
                    charWidth={16}
                    defaultMargin={30}
                    blockCount={4}
                    blockSize={4}
                    defaultChar={'#'}
                />
            </div>

            <div className={classes.CardUserInfo}>

                <div className={classes.NameContainer}>

                    <span className={classes.NameTitle}>Владелец карты</span>

                    <div
                        className={classes.Text}
                        onClick={(e) => focusInputOnCard(e, "i2")}
                    >
                        <AnimatePresence initial={false}>
                            {name.split('').map((el, i, arr) => (
                                    <motion.span
                                        key={i + el}
                                        initial={'initial'}
                                        animate={'animate'}
                                        exit={'exit'}
                                        variants={nameMotion}
                                        className={classes.AnimateText}
                                        dangerouslySetInnerHTML={{__html: el === ' ' ? `&nbsp;` : el}}
                                    />
                                )
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className={classes.DateInfo}>

                    <span className={classes.DateTitle}>Дата выдачи</span>

                    <div className={classes.Date}>

                        <AnimatePresence initial={false}>
                            <motion.span
                                key={month}
                                className={classes.MonthValue}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                variants={dateMotion}
                                style={{right: '8px'}}
                                dangerouslySetInnerHTML={{__html: month === 'MM' ? `MM` : month}}
                            />
                        </AnimatePresence>

                        /

                        <AnimatePresence initial={false}>
                            <motion.span
                                key={year}
                                className={classes.YearValue}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                variants={dateMotion}
                                style={{left: '8px'}}
                                dangerouslySetInnerHTML={{__html: year === 'YY' ? `YY` : year}}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}