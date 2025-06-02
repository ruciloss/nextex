import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./List.stylex";

type Props = {
    children: ReactNode;
    ariaLabel: string;
    customStyles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    customStyles?: stylex.StyleXStyles[];
};

const List = ({ children, ariaLabel, customStyles = [] }: Props) => {
    return (
        <div
            role="list"
            aria-label={ariaLabel}
            {...stylex.props(styles.list, ...customStyles)}
        >
            {children}
        </div>
    );
};

const Item = ({ children, customStyles = [] }: ItemProps) => {
    return (
        <div role="listitem" {...stylex.props(styles.item, ...customStyles)}>
            {children}
        </div>
    );
};

List.Item = Item;

export default List;
