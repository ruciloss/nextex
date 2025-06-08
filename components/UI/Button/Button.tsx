"use client";

import { ReactNode, KeyboardEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Button.stylex";

type ButtonProps = {
    children: ReactNode;
    ariaLabel?: string;
    ariaPressed?: boolean;
    ariaExpanded?: boolean;
    ariaControls?: string;
    ariaDisabled?: boolean;
    ariaHaspopup?: "dialog";
    ariaDescribedby?: string;

    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent<HTMLSpanElement>) => void;
    styles?: stylex.StyleXStyles[];
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
    styles = [],
}: ButtonProps) => {
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
        <button
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
            {...stylex.props(baseStyles.button, ...styles)}
        >
            {children}
        </button>
    );
};

export default Button;
