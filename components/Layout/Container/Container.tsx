import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Container.stylex";
import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => (
    <div {...stylex.props(baseStyles.container)}>{children}</div>
);

export default Container;
