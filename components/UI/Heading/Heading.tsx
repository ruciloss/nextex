import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";
import React from "react";

type Props = {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    spacing?: 0 | 1 | 2 | 3 | 4 | 5;
    weight?: 400 | 600 | 700;
    align?: "left" | "center" | "right";
    display?: "block" | "inline";
};

const Heading = ({
    children,
    level,
    variant = "h1",
    weight = 700,
    align = "left",
    spacing = 0,
    display = "block",
}: Props) => {
    const variantStyle = styles[variant];
    const weightStyle = styles[`fontWeight${weight}` as keyof typeof styles];
    const alignStyle = styles[`textAlign${align}` as keyof typeof styles];
    const spacingStyle =
        styles[`marginBottom${spacing}` as keyof typeof styles];
    const displayStyle = styles[`display${display}` as keyof typeof styles];

    const accessibilityProps = level
        ? { role: "heading", "aria-level": level }
        : {};

    return (
        <span
            {...accessibilityProps}
            {...stylex.props(
                styles.heading,
                variantStyle,
                weightStyle,
                alignStyle,
                spacingStyle,
                displayStyle,
            )}
        >
            {children}
        </span>
    );
};

export default Heading;
