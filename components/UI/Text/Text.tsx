import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Text.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    styles?: stylex.StyleXStyles[];
};

const Text = ({ children, id, styles = [] }: Props) => {
    return (
        <span id={id} {...stylex.props(baseStyles.text, ...styles)}>
            {children}
        </span>
    );
};

export default Text;
