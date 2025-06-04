import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Tooltip.stylex";

type TooltipProps = {
    children: ReactNode;
    ariaHidden?: boolean;
    styles?: stylex.StyleXStyles[];
};

const Tooltip = ({
    children,
    ariaHidden = true,
    styles = [],
}: TooltipProps) => {
    return (
        <div
            role="tooltip"
            aria-hidden={ariaHidden}
            {...stylex.props(baseStyles.tooltip, ...styles)}
        >
            {children}
        </div>
    );
};

export default Tooltip;
