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
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Text;
