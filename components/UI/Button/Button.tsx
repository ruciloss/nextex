import { ReactNode, KeyboardEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Button.stylex";

type Props = {
    children: ReactNode;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
    ariaDisabled?: boolean;
    ariaHaspopup?: "menu" | "listbox" | "tree" | "grid" | "dialog";
    ariaDescribedby?: string;

    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent<HTMLSpanElement>) => void;
    customStyles?: stylex.StyleXStyles[];
};

const Button = ({
    children,
    ariaLabel,
    ariaPressed,
    ariaExpanded,
    ariaControls,
    ariaDescribedby,
    ariaHaspopup,
    ariaDisabled,

    onClick,
    onKeyDown,
    customStyles = [],
}: Props) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
        if (ariaDisabled) {
            e.preventDefault();
            return;
        }

        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.();
        }

        if (onKeyDown) {
            onKeyDown(e);
        }
    };

    return (
        <span
            role="button"
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-describedby={ariaDescribedby}
            aria-haspopup={ariaHaspopup}
            aria-disabled={ariaDisabled}
            tabIndex={ariaDisabled ? -1 : 0}
            onClick={ariaDisabled ? undefined : onClick}
            onKeyDown={ariaDisabled ? undefined : handleKeyDown}
            {...stylex.props(styles.button, ...customStyles)}
        >
            {children}
        </span>
    );
};

export default Button;
