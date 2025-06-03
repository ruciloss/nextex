import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Dialog.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    role?: "dialog" | "alertdialog";
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    styles?: stylex.StyleXStyles[];
};

const Dialog = ({
    children,
    id,
    role = "dialog",
    ariaLabel,
    ariaDescribedby,
    styles = [],
}: Props) => {
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
                    <div {...stylex.props(baseStyles.header)}>
                        <span>dsadsa</span>
                        <span>Close</span>
                    </div>
                    <div {...stylex.props(baseStyles.body)}>{children}</div>
                    <div {...stylex.props(baseStyles.footer)}>dasdsa</div>
                </div>
            </div>
            <div role="presentation" {...stylex.props(baseStyles.overlay)} />
        </div>
    );
};

export default Dialog;
