import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Dialog.stylex";

type DialogProps = {
    children: ReactNode;
    id?: string;
    role?: "dialog" | "alertdialog";
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    styles?: stylex.StyleXStyles[];
};

type HeaderProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

type BodyProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

type FooterProps = {
    children: ReactNode;
    styles?: stylex.StyleXStyles[];
};

const Dialog = ({
    children,
    id,
    role = "dialog",
    ariaLabel,
    ariaDescribedby,
    styles = [],
}: DialogProps) => {
    return (
        <div {...stylex.props(baseStyles.dialog)}>
            <div {...stylex.props(baseStyles.inner)}>
                <div
                    id={id}
                    role={role}
                    aria-label={ariaLabel}
                    aria-describedby={ariaDescribedby}
                    {...stylex.props(baseStyles.modal, ...styles)}
                >
                    {children}
                </div>
            </div>
            <div role="presentation" {...stylex.props(baseStyles.overlay)} />
        </div>
    );
};

const Header = ({ children, styles = [] }: HeaderProps) => {
    return (
        <div {...stylex.props(baseStyles.header, ...styles)}>{children}</div>
    );
};

const Body = ({ children, styles = [] }: BodyProps) => {
    return <div {...stylex.props(baseStyles.body, ...styles)}>{children}</div>;
};

const Footer = ({ children, styles = [] }: FooterProps) => {
    return (
        <div {...stylex.props(baseStyles.footer, ...styles)}>{children}</div>
    );
};

Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;

export default Dialog;
