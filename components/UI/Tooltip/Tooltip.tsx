import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Tooltip.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    ariaHidden?: boolean;
    customStyles?: stylex.StyleXStyles[];
};

const Tooltip = ({
    children,
    id,
    ariaHidden = true,
    customStyles = [],
}: Props) => {
    return (
        <div
            id={id}
            role="tooltip"
            aria-hidden={ariaHidden}
            {...stylex.props(styles.tooltip, ...customStyles)}
        >
            {children}
        </div>
    );
};

export default Tooltip;
