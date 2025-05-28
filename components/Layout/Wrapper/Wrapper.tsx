import * as stylex from "@stylexjs/stylex";
import { styles } from "./Wrapper.stylex";
import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Wrapper = ({ children }: ContainerProps) => (
    <div role="main" {...stylex.props(styles.wrapper)}>
        {children}
    </div>
);

export default Wrapper;
