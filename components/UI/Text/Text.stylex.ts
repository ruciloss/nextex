import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    text: {},

    fontSmall: { fontSize: text.xs },

    fontBold: {
        fontWeight: 600,
    },

    colorPrimary: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
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
});
