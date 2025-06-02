import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Progressbar.stylex";

type Props = {
    children: ReactNode;
    customStyles?: stylex.StyleXStyles[];
};

const Progressbar = ({ children, customStyles = [] }: Props) => {
    return (
        <div
            role="progressbar"
            aria-valuetext="Loading..."
            {...stylex.props(styles.progressbar, ...customStyles)}
        >
            {children}
        </div>
    );
};

export default Progressbar;
