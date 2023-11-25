import React, {FC, PropsWithChildren} from "react"

interface ArrowIconProps {
    className: string;
    deg: number
}

export const ArrowIcon: FC<PropsWithChildren<ArrowIconProps>> = ({className, deg}) => (
    <svg
        className={className}
        fill="#000000"
        height="14px"
        width="14px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 330 330"
        transform={`rotate(${deg})`}
    >
        <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
    </svg>
)