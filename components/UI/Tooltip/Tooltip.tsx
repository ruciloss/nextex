import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Tooltip.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    customStyles?: stylex.StyleXStyles[];
};

const Tooltip = ({ children, id, customStyles = [] }: Props) => {
    return (
        <div
            id={id}
            role="tooltip"
            {...stylex.props(styles.tooltip, ...customStyles)}
        >
            {children}
        </div>
    );
};

export default Tooltip;
