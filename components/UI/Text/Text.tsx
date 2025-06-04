import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Text.stylex";

type TextProps = {
    children: ReactNode;
    id?: string;
    size?: "small";
    styles?: stylex.StyleXStyles[];
};

const Text = ({ children, id, size, styles = [] }: TextProps) => {
    const sizeStyles = {
        small: baseStyles.small,
    };

    return (
        <span
            id={id}
            {...stylex.props(
                baseStyles.text,
                size ? sizeStyles[size] : null,
                ...styles,
            )}
        >
            {children}
        </span>
    );
};

export default Text;
