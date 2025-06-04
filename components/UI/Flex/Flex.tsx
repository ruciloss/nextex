import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Flex.stylex";

type FlexProps = {
    children: ReactNode;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    styles?: stylex.StyleXStyles[];
};

const Flex = ({ children, gap, styles = [] }: FlexProps) => {
    const gapStyles = {
        1: baseStyles.gap1,
        2: baseStyles.gap2,
        3: baseStyles.gap3,
        4: baseStyles.gap4,
        5: baseStyles.gap5,
        6: baseStyles.gap6,
        7: baseStyles.gap7,
        8: baseStyles.gap8,
        9: baseStyles.gap9,
    };

    return (
        <div
            {...stylex.props(
                baseStyles.flex,
                gap ? gapStyles[gap] : null,
                ...styles,
            )}
        >
            {children}
        </div>
    );
};

export default Flex;
