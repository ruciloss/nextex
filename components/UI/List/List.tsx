import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./List.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type ListProps = {
    children: ReactNode;
    ariaLabel: string;
    as?: "div" | "ul";
    styles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    as?: "div" | "li";
    spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    styles?: stylex.StyleXStyles[];
};

const List = ({ children, ariaLabel, as = "div", styles = [] }: ListProps) => {
    const Component = as;

    return (
        <Component
            role="list"
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.list, ...styles)}
        >
            {children}
        </Component>
    );
};

const Item = ({ children, as = "div", spacing, styles = [] }: ItemProps) => {
    const Component = as;

    const marginBottom = {
        1: globalStyles.marginBottom1,
        2: globalStyles.marginBottom2,
        3: globalStyles.marginBottom3,
        4: globalStyles.marginBottom4,
        5: globalStyles.marginBottom5,
        6: globalStyles.marginBottom6,
        7: globalStyles.marginBottom7,
        8: globalStyles.marginBottom8,
        9: globalStyles.marginBottom9,
        10: globalStyles.marginBottom10,
    };

    return (
        <Component
            role="listitem"
            {...stylex.props(
                baseStyles.item,
                spacing ? marginBottom[spacing] : undefined,
                ...styles,
            )}
        >
            {children}
        </Component>
    );
};

List.Item = Item;

export default List;
