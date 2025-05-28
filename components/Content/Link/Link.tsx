import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";
import { ReactNode } from "react";

type LinkProps = {
    children: ReactNode;
};

const Link = ({ children }: LinkProps) => {
    return <span {...stylex.props(styles.link)}>{children}</span>;
};

export default Link;
