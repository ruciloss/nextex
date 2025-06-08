import { ElementType, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Heading.stylex";

type HeadingProps = {
    children: ReactNode;
    as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    styles?: stylex.StyleXStyles[];
};

const Heading = ({
    children,
    as = "div",
    id,
    level,
    size = 6,
    styles = [],
}: HeadingProps) => {
    const Component: ElementType = as;

    const fontSize = {
        1: baseStyles.h1,
        2: baseStyles.h2,
        3: baseStyles.h3,
        4: baseStyles.h4,
        5: baseStyles.h5,
        6: baseStyles.h6,
        7: baseStyles.h7,
        8: baseStyles.h8,
        9: baseStyles.h9,
    };

    return (
        <Component
            id={id}
            aria-level={level}
            {...stylex.props(baseStyles.heading, fontSize[size], ...styles)}
        >
            {children}
        </Component>
    );
};

export default Heading;
