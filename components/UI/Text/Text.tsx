import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Text.stylex";

type TextProps = {
    children: React.ReactNode;
    as?: "span" | "div" | "p";
    id?: string;
    size?: "small";
    weight?: "bold";
    color?: "primary" | "secondary" | "error" | "success" | "warning";
    styles?: stylex.StyleXStyles[];
};

const Text = ({
    children,
    as = "span",
    id,
    size,
    weight,
    color,
    styles = [],
}: TextProps) => {
    const Component = as;

    const sizeStyles = {
        small: baseStyles.fontSmall,
    };

    const weightStyles = {
        bold: baseStyles.fontBold,
    };

    const colorStyles = {
        primary: baseStyles.colorPrimary,
        secondary: baseStyles.colorSecondary,
        error: baseStyles.colorError,
        success: baseStyles.colorSuccess,
        warning: baseStyles.colorWarning,
    };

    return (
        <Component
            id={id}
            {...stylex.props(
                baseStyles.text,
                size && sizeStyles[size],
                weight && weightStyles[weight],
                color && colorStyles[color],
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

export default Text;
