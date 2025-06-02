import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Text.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    customStyles?: stylex.StyleXStyles[];
};

const Text = ({ children, id, customStyles = [] }: Props) => {
    return (
        <span id={id} {...stylex.props(styles.text, ...customStyles)}>
            {children}
        </span>
    );
};

export default Text;
