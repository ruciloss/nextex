import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Heading.stylex";

type Props = {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    id?: string;
    styles?: stylex.StyleXStyles[];
};

const Heading = ({ children, level, id, styles = [] }: Props) => {
    return (
        <span
            id={id}
            aria-level={level}
            {...stylex.props(baseStyles.heading, ...styles)}
        >
            {children}
        </span>
    );
};

export default Heading;
