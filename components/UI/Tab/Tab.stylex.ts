import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    tab: {
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        },
        borderRadius: radius.sm,
        cursor: "pointer",
        textDecoration: {
            default: "none",
            ":hover": "none",
        },
        padding: spacing.xxxs,
    },
});
