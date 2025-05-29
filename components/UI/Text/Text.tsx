import * as stylex from "@stylexjs/stylex";
import { styles } from "./Text.stylex";
import React from "react";

type Props = {
    children: React.ReactNode;
    variant?: "small";
    weight?: "bold";
    spacing?: 0 | 1 | 2 | 3 | 4 | 5;
    align?: "left" | "center" | "right";
    display?: "block" | "inline";
};

const Text = ({
    children,
    variant,
    weight,
    spacing = 0,
    align = "left",
    display = "block",
}: Props) => {
    const variantStyle = variant ? styles.fontSmall : null;
    const weightStyle = weight ? styles.fontWeight600 : null;
    const spacingStyle =
        styles[`marginBottom${spacing}` as keyof typeof styles];
    const alignStyle = styles[`textAlign${align}` as keyof typeof styles];
    const displayStyle = styles[`display${display}` as keyof typeof styles];

    return (
        <span
            {...stylex.props(
                variantStyle,
                weightStyle,
                spacingStyle,
                alignStyle,
                displayStyle,
            )}
        >
            {children}
        </span>
    );
};

export default Text;
