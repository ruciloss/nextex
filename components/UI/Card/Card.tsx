import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Card.stylex";

type CardProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
    as?: "div" | "article";
};

type HeaderProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

type BodyProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

type FooterProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Card = ({ children, styles = [], as = "div" }: CardProps) => {
    const Component = as;

    return (
        <Component {...stylex.props(baseStyles.card, ...styles)}>
            {children}
        </Component>
    );
};

const Header = ({ children, styles = [] }: HeaderProps) => {
    return (
        <div {...stylex.props(baseStyles.header, ...styles)}>{children}</div>
    );
};

const Body = ({ children, styles = [] }: BodyProps) => {
    return <div {...stylex.props(baseStyles.body, ...styles)}>{children}</div>;
};

const Footer = ({ children, styles = [] }: FooterProps) => {
    return (
        <div {...stylex.props(baseStyles.footer, ...styles)}>{children}</div>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
