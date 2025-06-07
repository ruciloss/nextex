import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./List.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type ListProps = {
    children: ReactNode;
    ariaLabel: string;
    styles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    styles?: stylex.StyleXStyles[];
};

const List = ({ children, ariaLabel, styles = [] }: ListProps) => {
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

const Item = ({ children, spacing, styles = [] }: ItemProps) => {
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
        <div
            role="listitem"
            {...stylex.props(
                baseStyles.item,
                spacing ? marginBottom[spacing] : undefined,
                ...styles,
            )}
        >
            {children}
        </div>
    );
};

List.Item = Item;

export default List;
