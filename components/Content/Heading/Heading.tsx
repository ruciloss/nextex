import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";
import React from "react";

type HeadingProps = {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
};

const Heading = ({ children, level = 1 }: HeadingProps) => {
    const levelStyleMap = {
        1: styles.h1,
        2: styles.h2,
        3: styles.h3,
        4: styles.h4,
        5: styles.h5,
    };

    return (
        <span
            role="heading"
            aria-level={level}
            {...stylex.props(styles.heading, levelStyleMap[level])}
        >
            {children}
        </span>
    );
};

export default Heading;
