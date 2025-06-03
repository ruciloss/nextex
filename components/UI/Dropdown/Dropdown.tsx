import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Dropdown.stylex";

type DropdownProps = {
    children: ReactNode;
    id?: string;
    ariaLabel?: string;
    role?: string;
    styles?: stylex.StyleXStyles[];
};

type ModalProps = {
    children: ReactNode;
    id?: string;
    ariaLabel?: string;
    role?: "menu" | "listbox";
    styles?: stylex.StyleXStyles[];
};

type ItemProps = {
    children: ReactNode;
    role?: "menuitem" | "option";
    styles?: stylex.StyleXStyles[];
};

type ButtonProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Dropdown = ({
    children,
    id,
    ariaLabel,
    role,
    styles = [],
}: DropdownProps) => {
    return (
        <div
            id={id}
            role={role}
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.dropdown, ...styles)}
        >
            {children}
        </div>
    );
};

const DropdownModal = ({
    children,
    id,
    ariaLabel,
    role = "menu",
    styles = [],
}: ModalProps) => {
    return (
        <div
            id={id}
            role={role}
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.modal, ...styles)}
        >
            {children}
        </div>
    );
};

const DropdownItem = ({
    children,
    role = "menuitem",
    styles = [],
}: ItemProps) => {
    return (
        <div role={role} {...stylex.props(baseStyles.item, ...styles)}>
            {children}
        </div>
    );
};

const DropdownButton = ({ children, styles = [] }: ButtonProps) => {
    return (
        <div {...stylex.props(baseStyles.button, ...styles)}>{children}</div>
    );
};

// Namespace
Dropdown.Item = DropdownItem;
Dropdown.Button = DropdownButton;
Dropdown.Modal = DropdownModal;

export default Dropdown;
