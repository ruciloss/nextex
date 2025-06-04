import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Navigation.stylex";

type NavigationProps = {
    children: ReactNode;
    ariaLabel: string;
    styles?: stylex.StyleXStyles[];
};

const Navigation = ({ children, ariaLabel, styles = [] }: NavigationProps) => {
    return (
        <div
            role="navigation"
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.navigation, ...styles)}
        >
            {children}
        </div>
    );
};

export default Navigation;
