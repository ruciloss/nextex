import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    customStyles?: stylex.StyleXStyles[];
};

const Heading = ({ children, id, customStyles = [] }: Props) => {
    return (
        <span id={id} {...stylex.props(styles.heading, ...customStyles)}>
            {children}
        </span>
    );
};

export default Heading;
