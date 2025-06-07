import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Icon.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type IconProps = {
    children: ReactNode;
    size?: "large";
    color?: "secondary";
    bg?: "secondary";
};

const Icon = ({ children, size, color, bg }: IconProps) => {
    const sizeStyles = {
        large: baseStyles.iconLarge,
    };

    const colorStyles = {
        secondary: globalStyles.colorSecondary,
    };

    const bgStyles = {
        secondary: globalStyles.bgTertiary,
    };

    return (
        <span {...stylex.props(baseStyles.icon, bg ? bgStyles[bg] : undefined)}>
            <span
                {...stylex.props(
                    baseStyles.iconInner,
                    size ? sizeStyles[size] : undefined,
                    color ? colorStyles[color] : undefined,
                )}
            >
                {children}
            </span>
        </span>
    );
};

export default Icon;
