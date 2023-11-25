// @ts-ignore
import {CardType} from "@types/CardType";

export type storeType = {
    cardData: CardType;
    changeData: (name: string, value: string) => void;
    cardRotate: boolean;
    changeCardRotate: (value: boolean) => void;
    removeData: () => void;
    fieldBorder: string | undefined;
    changeFieldBorder: (value?: string) => void;
}