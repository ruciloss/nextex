import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";

type Props = {
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5;
    id?: string;
    customStyles?: stylex.StyleXStyles[];
};

const Heading = ({ children, level, id, customStyles = [] }: Props) => {
    return (
        <span
            id={id}
            aria-level={level}
            {...stylex.props(styles.heading, ...customStyles)}
        >
            {children}
        </span>
    );
};

export default Heading;
