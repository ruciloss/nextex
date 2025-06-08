import React, { ReactNode, ReactElement, Children, cloneElement } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./List.stylex";

type ListProps = {
    children: ReactNode;
    ariaLabel: string;
    as?: "div" | "ul";
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    bullet?: "none" | "disc" | "decimal" | "circle" | "square";
    direction?: "row" | "column" | "rowReverse" | "columnReverse";
    styles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    as?: "div" | "li";
    styles?: stylex.StyleXStyles[];
};

const List = ({
    children,
    ariaLabel,
    as = "div",
    gap,
    bullet = "none",
    direction = "column",
    styles = [],
}: ListProps) => {
    const Component = as;

    const gapStyles = {
        1: baseStyles.gap1,
        2: baseStyles.gap2,
        3: baseStyles.gap3,
        4: baseStyles.gap4,
        5: baseStyles.gap5,
        6: baseStyles.gap6,
        7: baseStyles.gap7,
        8: baseStyles.gap8,
        9: baseStyles.gap9,
        10: baseStyles.gap10,
    };

    const bulletStyles = {
        none: baseStyles.none,
        disc: baseStyles.disc,
        decimal: baseStyles.decimal,
        circle: baseStyles.circle,
        square: baseStyles.square,
    };

    const directionStyles = {
        row: baseStyles.row,
        rowReverse: baseStyles.rowReverse,
        column: baseStyles.column,
        columnReverse: baseStyles.columnReverse,
    };

    const listStyle = as === "ul" ? bulletStyles[bullet] : baseStyles.none;

    const childrenWithAs = Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === List.Item) {
            const typedChild = child as ReactElement<ItemProps>;
            if (!typedChild.props.as) {
                return cloneElement(typedChild, {
                    as: as === "ul" ? "li" : "div",
                });
            }
        }
        return child;
    });

    return (
        <Component
            role="list"
            aria-label={ariaLabel}
            {...stylex.props(
                baseStyles.list,
                gap ? gapStyles[gap] : undefined,
                listStyle,
                direction ? directionStyles[direction] : undefined,
                ...styles,
            )}
        >
            {childrenWithAs}
        </Component>
    );
};

const Item = ({ children, as = "div", styles = [] }: ItemProps) => {
    const Component = as;

    return (
        <Component
            role="listitem"
            {...stylex.props(baseStyles.item, ...styles)}
        >
            {children}
        </Component>
    );
};

List.Item = Item;

export default List;
