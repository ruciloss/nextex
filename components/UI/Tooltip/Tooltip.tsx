import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Tooltip.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    ariaHidden?: boolean;
    styles?: stylex.StyleXStyles[];
};

const Tooltip = ({ children, id, ariaHidden = true, styles = [] }: Props) => {
    return (
        <div
            id={id}
            role="tooltip"
            aria-hidden={ariaHidden}
            {...stylex.props(baseStyles.tooltip)}
        >
            <div {...stylex.props(baseStyles.item, ...styles)}>{children}</div>
        </div>
    );
};

export default Tooltip;
