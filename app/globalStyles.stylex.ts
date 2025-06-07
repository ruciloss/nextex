import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "./globalTokens.stylex";

export const globalStyles = stylex.create({
    fontBold: { fontWeight: 600 },

    h1: { fontSize: text.h1 },
    h2: { fontSize: text.h2 },
    h3: { fontSize: text.h3 },
    h4: { fontSize: text.h4 },
    h5: { fontSize: text.h5 },
    h6: { fontSize: text.p },
    h7: { fontSize: text.sm },
    h8: { fontSize: text.xs },
    h9: { fontSize: text.xxs },

    textCenter: { textAlign: "center" },
    textRight: { textAlign: "right" },

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },
    marginBottom6: { marginBottom: spacing.lg },
    marginBottom7: { marginBottom: spacing.xl },
    marginBottom8: { marginBottom: spacing.xxl },
    marginBottom9: { marginBottom: spacing.xxxl },
    marginBottom10: { marginBottom: spacing.xxxxl },

    colorPrimary: {
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
    },
    colorSecondary: {
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
    },
    colorError: {
        color: `rgba(${colors.errorR}, ${colors.errorG}, ${colors.errorB}, 1)`,
    },
    colorSuccess: {
        color: `rgba(${colors.successR}, ${colors.successG}, ${colors.successB}, 1)`,
    },
    colorWarning: {
        color: `rgba(${colors.warningR}, ${colors.warningG}, ${colors.warningB}, 1)`,
    },

    bgTertiary: {
        backgroundColor: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
    },
});
