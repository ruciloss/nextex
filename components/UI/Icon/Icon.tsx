import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Icon.stylex";

type IconProps = {
    children: React.ReactNode;
    size?: "large";
    color?: "secondary";
    bg?: "secondary";
};

const Icon = ({ children, size, color, bg }: IconProps) => {
    const sizeStyles = {
        large: baseStyles.iconLarge,
    };

    const colorStyles = {
        secondary: baseStyles.colorSecondary,
    };

    const bgStyles = {
        secondary: baseStyles.bgTertiary,
    };

    return (
        <span
            {...stylex.props(
                baseStyles.icon,
                bg ? bgStyles[bg] : undefined,
                size ? sizeStyles[size] : undefined,
            )}
        >
            <span
                {...stylex.props(
                    baseStyles.iconInner,
                    color ? colorStyles[color] : undefined,
                )}
            >
                {children}
            </span>
        </span>
    );
};

export default Icon;
