import {create} from "zustand";
import {defaultCardData} from "@constants/defaultCardData";
// @ts-ignore
import {storeType} from "@types/storeType";

export const useCard = create<storeType>(set => ({
        cardData: defaultCardData,

        changeData: (name: string, value: string) => set(state => ({
            ...state,
            cardData: {
                ...state.cardData,
                [name]: value
            }
        })),

        removeData: () => set(state => ({
            ...state,
            cardData: defaultCardData
        })),

        cardRotate: false,

        changeCardRotate: (value: boolean) => set(state => ({
            ...state,
            cardRotate: value
        })),

        fieldBorder: undefined,

        changeFieldBorder: (value?: string) => set(state => ({
            ...state,
            fieldBorder: value
        }))
    }
))