import * as stylex from "@stylexjs/stylex";
import { styles } from "./Container.stylex";
import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
    <div {...stylex.props(styles.container)}>{children}</div>
);

export default Container;
