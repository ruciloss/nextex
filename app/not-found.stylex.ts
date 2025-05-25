import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "./globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        fontSize: text.p,
        fontWeight: 700,
        marginBottom: spacing.xs,
        textAlign: "center",
    },
    paragraph: {
        display: "block",
        marginBottom: spacing.md,
        textAlign: "center",
    },
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
