import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    tab: {
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
        borderRadius: radius.sm,
        cursor: "pointer",
        padding: spacing.xxxs,
        textDecoration: {
            default: "none",
            ":hover": "none",
        },
    },
});
