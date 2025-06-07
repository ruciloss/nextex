import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Text.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type TextProps = {
    children: ReactNode;
    as?: "span" | "div";
    id?: string;
    size?: "small";
    weight?: "bold";
    align?: "center" | "right";
    color?: "secondary" | "primary" | "error" | "success" | "warning";
    gap?: 1 | 2 | 3 | 4 | 5;
    styles?: stylex.StyleXStyles[];
};

const Text = ({
    children,
    as = "span",
    id,
    size,
    weight,
    align,
    color,
    gap,
    styles = [],
}: TextProps) => {
    const sizeStyles = {
        small: globalStyles.h8,
    };

    const weightStyles = {
        bold: globalStyles.fontBold,
    };

    const alignStyles = {
        center: globalStyles.textCenter,
        right: globalStyles.textRight,
    };

    const colorStyles = {
        primary: globalStyles.colorPrimary,
        secondary: globalStyles.colorSecondary,
        error: globalStyles.colorError,
        success: globalStyles.colorSuccess,
        warning: globalStyles.colorWarning,
    };

    const gapStyles = {
        1: globalStyles.marginBottom1,
        2: globalStyles.marginBottom2,
        3: globalStyles.marginBottom3,
        4: globalStyles.marginBottom4,
        5: globalStyles.marginBottom5,
    };

    const Component = as;

    return (
        <Component
            id={id}
            {...stylex.props(
                baseStyles.text,
                size && sizeStyles[size],
                weight && weightStyles[weight],
                align && alignStyles[align],
                color && colorStyles[color],
                gap && gapStyles[gap],
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Text;
