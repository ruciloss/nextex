import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./List.stylex";

type Props = {
    children: ReactNode;
    ariaLabel: string;
    styles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const List = ({ children, ariaLabel, styles = [] }: Props) => {
    return (
        <div
            role="list"
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.list, ...styles)}
        >
            {children}
        </div>
    );
};

const Item = ({ children, styles = [] }: ItemProps) => {
    return (
        <div role="listitem" {...stylex.props(baseStyles.item, ...styles)}>
            {children}
        </div>
    );
};

List.Item = Item;

export default List;
