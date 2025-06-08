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
    styles = [],
}: ModalProps) => {
    return (
        <div
            id={id}
            role="dialog"
            aria-label={ariaLabel}
            {...stylex.props(baseStyles.modal, ...styles)}
        >
            {children}
        </div>
    );
};

const DropdownButton = ({ children }: ButtonProps) => {
    return <div>{children}</div>;
};

Dropdown.Button = DropdownButton;
Dropdown.Modal = DropdownModal;

export default Dropdown;
