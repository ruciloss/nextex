import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Dropdown.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    ariaLabel: string;
    role: "menu" | "listbox" | "tree" | "grid" | "dialog";
    ariaLabelledby: string;
    customStyles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    role: "menuitem" | "option" | "treeitem" | "gridcell";
    customStyles?: stylex.StyleXStyles[];
};

const Dropdown = ({
    children,
    id,
    ariaLabel,
    role,
    ariaLabelledby,
    customStyles = [],
}: Props) => {
    return (
        <div
            id={id}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            {...stylex.props(styles.dropdown, ...customStyles)}
        >
            {children}
        </div>
    );
};

const DropdownItem = ({ children, role, customStyles = [] }: ItemProps) => {
    return (
        <div role={role} {...stylex.props(styles.item, ...customStyles)}>
            {children}
        </div>
    );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
