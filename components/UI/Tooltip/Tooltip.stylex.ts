import * as stylex from "@stylexjs/stylex";
import {
    colors,
    radius,
    spacing,
    text,
    transitions,
} from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    tooltip: {
        backgroundColor: `rgba(${colors.bgInheritR}, ${colors.bgInheritG}, ${colors.bgInheritB}, .9)`,
        borderRadius: radius.sm,
        boxShadow: {
            default: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .25)`,
            ":focus-visible": "none",
        },
        color: `rgba(${colors.textInheritR}, ${colors.textInheritG}, ${colors.textInheritB}, 1)`,
        display: "none",
        fontSize: text.xs,
        left: "50%",
        padding: `${spacing.xxs} ${spacing.xs}`,
        pointerEvents: "none",
        position: "absolute",
        top: "calc(100% + 8px)",
        transform: "translateX(-50%)",
        transition: transitions.medium,
        whiteSpace: "nowrap",
        zIndex: 2,
    },
});
