import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Dialog.stylex";

type Props = {
    children: ReactNode;
    id?: string;
    role?: "dialog" | "alertdialog";
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    customStyles?: stylex.StyleXStyles[];
};

const Dialog = ({
    children,
    id,
    role = "dialog",
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    customStyles = [],
}: Props) => {
    return (
        <div
            id={id}
            role={role}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedby}
            {...stylex.props(styles.dialog, ...customStyles)}
        >
            {children}
        </div>
    );
};

export default Dialog;
