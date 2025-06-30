import { ElementType, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Heading.stylex";

type HeadingProps = {
    children: ReactNode;
    as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: "small" | "large";
    color?: "secondary";
    styles?: stylex.StyleXStyles[];
};

const Heading = ({
    children,
    as = "div",
    id,
    level,
    size,
    color,
    styles = [],
}: HeadingProps) => {
    const Component: ElementType = as;

    const sizeStyles = {
        small: baseStyles.small,
        large: baseStyles.large,
    };

    const colorStyles = {
        secondary: baseStyles.secondary,
    };

    return (
        <Component
            id={id}
            aria-level={level}
            {...stylex.props(
                baseStyles.heading,
                size && sizeStyles[size],
                color && colorStyles[color],
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Heading;
