// 'use client'

import classes from './TextField.module.scss'
import {ChangeEvent, FocusEvent, FC, PropsWithChildren} from "react"
import cn from "classnames";
// @ts-ignore
import {CardType} from "@types/CardType";

interface TextFieldProps {
    id: string
    placeholder: string,
    label: string,
    name: string,
    value: string,
    length?: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    type?: 'password',
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

export const TextField: FC<PropsWithChildren<TextFieldProps>> = (
    {
        onFocus,
        onBlur,
        id,
        placeholder,
        label,
        name,
        value,
        length,
        onChange,
        className,
        type,
    }
) => {
    return (
        <div className={cn(classes.TextField, className)}>

            <label htmlFor={id} className={classes.Label}>{label}</label>

            <input
                id={id}
                onFocus={onFocus}
                onBlur={onBlur}
                className={classes.Input}
                placeholder={placeholder}
                maxLength={length}
                onChange={(e) => onChange(e)}
                type={type}
                value={value}
                name={name}
            />
        </div>
    )
}