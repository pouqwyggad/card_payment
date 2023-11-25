'use client'

import classes from './Form.module.scss'
import {ChangeEvent, FC, PropsWithChildren, useState, useEffect} from "react"
import {TextField} from "@ui/TextField/TextField";
import {Button} from "@ui/Button/Button";
import {useCard} from "@store/store";
import {separateStr} from "@utils/separateStr";
import {changeNumbersValue} from "@utils/changeNumbersValue";
import {defaultCardData} from "@constants/defaultCardData";
import {changeCVV} from "@utils/changeCVV";
import {SelectField} from "@ui/SelectField/SelectField";
// @ts-ignore
import {DateType} from "@types/DateType";
import {fillDate} from "@utils/fillDate"
import {initialData, initialDataSelect} from "@constants/initialData";

interface FormProps {}

export const Form: FC<PropsWithChildren<FormProps>> = () => {
    const {changeData, changeCardRotate} = useCard(state => state);
    const [formState, setFormState] = useState(initialData);
    const [selectState, setSelectState] = useState<DateType>(initialDataSelect);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        let value = e.target.value;
        let formValue = e.target.value;

        if (name === 'name') {
            value = value.replace(/[^A-Za-z ]/g, '').toUpperCase();
        }

        if (name === 'number') {
            value = value.replace(/[^\d]/g, '').replaceAll(' ', '');
            formValue = formValue.replace(/[^\s\d]/g, '').replaceAll(' ', '');

            if (value.length > 16) value = value.slice(0, 16);

            if (formValue.length > 16) formValue = formValue.slice(0, 16);

            formValue = separateStr(formValue, 4).join(' ');

            value = changeNumbersValue(value, '#', 16);

            // request place
        }

        if (name === 'cvv') {
            value = value.replace(/[^\d]/g, '');

            if (value.length > 3) value = value.slice(0, 3);

            value = changeCVV(value, '*', 3);
        }

        setFormState((prevState) => {
            return {
                ...prevState,
                [name]: name === 'number' ? formValue : value.replaceAll('#', '').replaceAll('*', '')
            }
        });

        if (name === 'month') {
            if (+value < 10) value = '0' + value;
        }

        if (name === 'year') {
            value = value.slice(2, 4);
        }

        // @ts-ignore
        value ? changeData(name, value) : changeData(name, defaultCardData[name]);
    }

    const onFocusHandler = (e: 'blur' | 'focus') => changeCardRotate(e === 'focus');


    useEffect(() => {
        setSelectState(fillDate());
    }, [])

    return (

        <div className={classes.Container}>
            <TextField
                id={'i1'}
                placeholder={"1234 5678 9012 3456"}
                label={"Номер карты"}
                name={"number"}
                value={formState.number}
                length={19}
                onChange={onChangeHandler}
                onFocus={() => onFocusHandler('blur')}
            />

            <TextField
                id={'i2'}
                placeholder={"ivanov ivan"}
                label={"Владелец карты"}
                name={"name"}
                value={formState.name}
                onChange={onChangeHandler}
                onFocus={() => onFocusHandler('blur')}
            />

            <div className={classes.Row}>
                <TextField
                    id={'i3'}
                    placeholder={"***"}
                    label={"CVV"}
                    name={"cvv"}
                    type={'password'}
                    value={formState.cvv}
                    onChange={onChangeHandler}
                    onFocus={() => onFocusHandler('focus')}
                    onBlur={() => onFocusHandler('blur')}
                    length={3}
                />

                <SelectField
                    id={"i4"}
                    onChange={onChangeHandler}
                    title={"Месяц"}
                    name={"month"}
                    value={formState.month}
                    optionsValue={selectState.month}
                    onBlur={() => onFocusHandler('blur')}
                />

                <SelectField
                    id={"i5"}
                    onChange={onChangeHandler}
                    title={"Год"}
                    name={"year"}
                    value={formState.year}
                    optionsValue={selectState.years}
                    onBlur={() => onFocusHandler('blur')}
                />

            </div>

            <Button/>
        </div>
    )
}