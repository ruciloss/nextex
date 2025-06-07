import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Flex.stylex";

type FlexProps = {
    children: ReactNode;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    wrap?: boolean;
    column?: boolean;
    justify?: "center" | "end" | "between";
    styles?: stylex.StyleXStyles[];
};

const Flex = ({
    children,
    gap,
    wrap = false,
    column = false,
    justify,
    styles = [],
}: FlexProps) => {
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
        10: baseStyles.gap10,
    };

    const justifyStyles = {
        center: baseStyles.justifyCenter,
        end: baseStyles.justifyEnd,
        between: baseStyles.justifyBetween,
    };

    return (
        <div
            {...stylex.props(
                baseStyles.flex,
                wrap ? baseStyles.wrap : null,
                column ? baseStyles.column : null,
                gap ? gapStyles[gap] : null,
                justify ? justifyStyles[justify] : null,
                ...styles,
            )}
        >
            {children}
        </div>
    );
};

export default Flex;
