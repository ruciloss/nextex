import { ElementType, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Heading.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type HeadingProps = {
    children: ReactNode;
    id?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    align?: "center" | "right";
    as?: "div" | "span";
    styles?: stylex.StyleXStyles[];
};

const Heading = ({
    children,
    id,
    level,
    size = 6,
    gap,
    align,
    as = "div",
    styles = [],
}: HeadingProps) => {
    const Component: ElementType = as;

    const fontSize = {
        1: globalStyles.h1,
        2: globalStyles.h2,
        3: globalStyles.h3,
        4: globalStyles.h4,
        5: globalStyles.h5,
        6: globalStyles.h6,
        7: globalStyles.h7,
        8: globalStyles.h8,
        9: globalStyles.h9,
    };

    const marginBottom = {
        1: globalStyles.marginBottom1,
        2: globalStyles.marginBottom2,
        3: globalStyles.marginBottom3,
        4: globalStyles.marginBottom4,
        5: globalStyles.marginBottom5,
        6: globalStyles.marginBottom6,
        7: globalStyles.marginBottom7,
        8: globalStyles.marginBottom8,
        9: globalStyles.marginBottom9,
        10: globalStyles.marginBottom10,
    };

    const alignStyles = {
        center: globalStyles.textCenter,
        right: globalStyles.textRight,
    };

    return (
        <Component
            id={id}
            aria-level={level}
            {...stylex.props(
                baseStyles.heading,
                fontSize[size],
                gap ? marginBottom[gap] : undefined,
                align ? alignStyles[align] : undefined,
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Heading;
