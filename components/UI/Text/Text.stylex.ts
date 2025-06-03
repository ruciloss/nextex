import * as stylex from "@stylexjs/stylex";
import { spacing, text, colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    text: {},

    t: {
        display: "block",
    },

    small: { fontSize: text.xs },

    bold: { fontWeight: 600 },

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },

    center: { textAlign: "center" },
    right: { textAlign: "right" },

    primary: {
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
    },
    secondary: {
        color: `rgba(${colors.secondaryTextR}, ${colors.secondaryTextG}, ${colors.secondaryTextB}, 1)`,
    },
    error: {
        color: `rgba(${colors.errorR}, ${colors.errorG}, ${colors.errorB}, 1)`,
    },
    success: {
        color: `rgba(${colors.successR}, ${colors.successG}, ${colors.successB}, 1)`,
    },
    warning: {
        color: `rgba(${colors.warningR}, ${colors.warningG}, ${colors.warningB}, 1)`,
    },
});
