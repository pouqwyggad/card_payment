import classes from './SelectField.module.scss';
import {ChangeEvent, FC, FocusEvent, PropsWithChildren, useState} from "react";
import {ArrowIcon} from "@icons/ArrowIcon";
import cn from "classnames";

interface SelectFieldProps {
    id: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    title: string;
    name: string;
    value: string;
    optionsValue: number[];
    onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
}

export const SelectField: FC<PropsWithChildren<SelectFieldProps>> = (
    {
        id,
        onChange,
        title,
        name,
        value,
        optionsValue,
        onBlur,
    }
) => {
    const [rotate, setRotate] = useState(false);

    return (
        <div className={classes.Container}>

            <label className={classes.Label}>{title}</label>

            <select
                className={cn(classes.Select, value !== "" ? classes.SelectActive : "")}
                value={value}
                name={name}
                id={id}
                onClick={() => setRotate(p => !p)}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onBlur}
            >
                <option value="" disabled hidden>{name === "month" ? "MM" : "YY"}</option>

                {optionsValue.map((el, i) => (
                    <option
                        key={i + el + name}
                        value={el}
                    >
                        {el}
                    </option>
                ))}
            </select>

            <ArrowIcon
                className={classes.Arrow}
                deg={rotate ? 180 : 0}
            />

        </div>
    )
}