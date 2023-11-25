import React from "react";

export const focusInputOnCard = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.stopPropagation();

    const element = document.getElementById(id);

    element && element.focus();
}