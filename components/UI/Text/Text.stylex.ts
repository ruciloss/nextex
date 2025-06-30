import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    text: {},

    fontSmall: { fontSize: text.xs },

    fontBold: {
        fontWeight: 600,
    },

    primary: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
    secondary: {
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
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
