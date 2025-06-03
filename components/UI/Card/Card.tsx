import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Card.stylex";

type Props = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Card = ({ children, styles = [] }: Props) => {
    return <div {...stylex.props(baseStyles.card, ...styles)}>{children}</div>;
};

const Header = ({ children, styles = [] }: Props) => {
    return (
        <div {...stylex.props(baseStyles.header, ...styles)}>{children}</div>
    );
};

const Body = ({ children, styles = [] }: Props) => {
    return <div {...stylex.props(baseStyles.body, ...styles)}>{children}</div>;
};

const Footer = ({ children, styles = [] }: Props) => {
    return (
        <div {...stylex.props(baseStyles.footer, ...styles)}>{children}</div>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
