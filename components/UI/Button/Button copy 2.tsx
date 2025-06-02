import * as stylex from "@stylexjs/stylex";
import { styles } from "./Button.stylex";
import { ReactNode, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
    children: ReactNode;
    ariaLabel: string;
    variant?: "solid" | "outline" | "circle";
    color?: "transparent" | "primary" | "secondary";
    spacing?: 1 | 2 | 3 | 4 | 5;
    align?: "center" | "right";
    arrow?: boolean;
    onClick?: () => void;
    onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
};

const Button = ({
    children,
    ariaLabel,
    variant = "solid",
    color = "transparent",
    align,
    spacing,
    arrow = false,
    onClick,
    onKeyDown,
}: Props) => {
    const wrapperStyles = [align && styles[align]].filter(Boolean);

    const stylesArray = [
        styles.btn,
        color && styles[color],
        styles[variant],
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
    ].filter(Boolean);

    return (
        <div {...stylex.props(...wrapperStyles)}>
            <div
                role="button"
                aria-label={ariaLabel}
                tabIndex={0}
                onClick={onClick}
                onKeyDown={onKeyDown}
                {...stylex.props(...stylesArray)}
            >
                {children}

                {arrow && (
                    <span {...stylex.props(styles.arrow)}>
                        <ChevronDown strokeWidth={4} aria-hidden="true" />
                    </span>
                )}
            </div>
        </div>
    );
};

export default Button;
