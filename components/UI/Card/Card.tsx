import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Card.stylex";

type Props = {
    children: ReactNode;
    customStyles?: stylex.StyleXStyles[];
};

type BodyProps = {
    children: ReactNode;
    customStyles?: stylex.StyleXStyles[];
};

const Card = ({ children, customStyles = [] }: Props) => {
    return (
        <div {...stylex.props(styles.card, ...customStyles)}>{children}</div>
    );
};

const Body = ({ children, customStyles = [] }: BodyProps) => {
    return (
        <div {...stylex.props(styles.body, ...customStyles)}>{children}</div>
    );
};

Card.Body = Body;

export default Card;
