import React, {FC, PropsWithChildren} from "react";

interface BackSideLinesProps {
    className: string[]
}

export const BackSideLines: FC<PropsWithChildren<BackSideLinesProps>> = ({className}) => (
    <span className={className[0]}>
        <span className={className[1]}/>
        <span className={className[2]}/>
    </span>
);
