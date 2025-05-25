import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";
import React from "react";

type HeadingProps = {
    children: React.ReactNode;
    level?: number;
};

const Heading = ({ children, level = 1 }: HeadingProps) => {
    return (
        <span
            role="heading"
            aria-level={level}
            {...stylex.props(styles.heading)}
        >
            {children}
        </span>
    );
};

export default Heading;
