import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Icon.stylex";

type IconProps = {
    children: ReactNode;
};

const Icon = ({ children }: IconProps) => {
    return (
        <span {...stylex.props(baseStyles.icon)}>
            <div {...stylex.props(baseStyles.iconInner)}>{children}</div>
        </span>
    );
};

export default Icon;
