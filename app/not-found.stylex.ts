import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "./globalTokens.stylex";

export const styles = stylex.create({
    link: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        display: "block",
        fontWeight: 600,
        textAlign: "center",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
    icon: {
        display: "block",
        margin: "auto",
        marginBottom: spacing.xs,
    },
});
