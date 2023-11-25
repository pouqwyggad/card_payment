import classes from './AnimateCVV.module.scss'
import {FC, PropsWithChildren} from "react"
import {AnimatePresence, motion} from "framer-motion";
import {cvvMotion} from "@motions/cvvMotion";

interface AnimateCVVProps {
    valueCVV: string;
    charWidth: number;
    defaultMargin: number;
    className?: string;
}

export const AnimateCVV: FC<PropsWithChildren<AnimateCVVProps>> = (
    {
        valueCVV,
        charWidth,
        defaultMargin,
        className,
    }
) => {
    return (
        <div className={className}>
            <AnimatePresence>
                {valueCVV.split('').map((el, i) => (
                        <motion.span
                            key={i + el}
                            className={classes.Char}
                            variants={cvvMotion}
                            initial={'initial'}
                            animate={'animate'}
                            exit={'exit'}
                            style={{left: `${i * charWidth + defaultMargin}px`}}
                            dangerouslySetInnerHTML={{__html: el !== '*' ? '&#183;' : '*'}}
                        />
                    )
                )}
            </AnimatePresence>
        </div>
    )
}