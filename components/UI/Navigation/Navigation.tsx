import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Navigation.stylex";

type Props = {
    children: ReactNode;
    ariaLabel: string;
    customStyles?: stylex.StyleXStyles[];
};

const Navigation = ({ children, ariaLabel, customStyles = [] }: Props) => {
    return (
        <div
            role="navigation"
            aria-label={ariaLabel}
            {...stylex.props(styles.navigation, ...customStyles)}
        >
            {children}
        </div>
    );
};

export default Navigation;
