import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Card.stylex";

type CardProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
    as?: "div" | "article";
};

const Card = ({ children, styles = [], as = "div" }: CardProps) => {
    const Component = as;

    return (
        <Component {...stylex.props(baseStyles.card, ...styles)}>
            {children}
        </Component>
    );
};

export default Card;
