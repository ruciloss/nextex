import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Tooltip.stylex";

type TooltipProps = {
    children: React.ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Tooltip = ({ children, styles = [] }: TooltipProps) => {
    return (
        <div
            role="tooltip"
            aria-hidden="true"
            {...stylex.props(baseStyles.tooltip, ...styles)}
        >
            {children}
        </div>
    );
};

export default Tooltip;
