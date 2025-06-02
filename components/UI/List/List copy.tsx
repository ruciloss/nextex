import * as stylex from "@stylexjs/stylex";
import { styles } from "./List.stylex";
import { ReactNode } from "react";

type ListProps = {
    children: ReactNode;
    spacing?: 1 | 2 | 3 | 4 | 5;
};

type ListItemProps = {
    children: ReactNode;
    spacing?: 1 | 2 | 3 | 4 | 5;
    align?: "center" | "right";
};

const List = ({ children, spacing }: ListProps) => {
    const stylesArray = [
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
    ].filter(Boolean);

    return (
        <div role="list" {...stylex.props(...stylesArray)}>
            {children}
        </div>
    );
};

const Item = ({ children, spacing, align }: ListItemProps) => {
    const stylesArray = [
        styles.listItem,
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
        align && styles[align],
    ].filter(Boolean);

    return (
        <div role="listitem" {...stylex.props(...stylesArray)}>
            {children}
        </div>
    );
};

List.Item = Item;

export default List;
