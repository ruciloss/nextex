import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Navigation.stylex";

type NavigationProps = {
    children: ReactNode;
    ariaLabel: string;
    styles?: stylex.StyleXStyles[];
    as?: "div" | "nav";
};

const Navigation = ({
    children,
    ariaLabel,
    styles = [],
    as = "div",
}: NavigationProps) => {
    const Component = as;

    return (
        <Component
            role="navigation"
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.navigation, ...styles)}
        >
            {children}
        </Component>
    );
};

export default Navigation;
