import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Tab.stylex";

type TabProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Tab = ({ children, styles = [] }: TabProps) => {
    return <div {...stylex.props(baseStyles.tab, ...styles)}>{children}</div>;
};

export default Tab;
