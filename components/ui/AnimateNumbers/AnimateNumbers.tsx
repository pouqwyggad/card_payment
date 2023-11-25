import classes from './AnimateNumbers.module.scss'
import {FC, PropsWithChildren} from "react"
import {AnimatePresence, motion} from "framer-motion";
import {textMotion} from "@motions/textMotion";
import {incrementMargin} from "@utils/incrementMargin";

interface AnimateNumbersProps {
    numbers: string;
    charWidth: number;
    defaultMargin?: number;
    blockSize?: number;
    blockCount?: number;
    className?: string;
    defaultChar: string;
}

export const AnimateNumbers: FC<PropsWithChildren<AnimateNumbersProps>> = (
    {
        numbers,
        charWidth,
        defaultMargin,
        blockSize,
        blockCount,
        className,
        defaultChar,
    }
) => {
    return (
        <div className={className}>

            {numbers.split('').map((el, i) => {

                    let margin = 1;

                    if (blockSize && blockCount) {
                        margin = incrementMargin(i, blockSize, blockCount)
                    }

                    return (
                        <AnimatePresence
                            key={i}
                            initial={false}
                        >
                            <motion.span
                                key={i + el}
                                className={classes.Number}
                                variants={textMotion}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'exit'}
                                dangerouslySetInnerHTML={{__html: el !== defaultChar ? el : '#'}}
                                style={{left: `${i * charWidth + (defaultMargin || 0) * margin}px`}}
                            />

                        </AnimatePresence>
                    )
                }
            )}
        </div>
    )
}