import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    icon: {
        backgroundColor: {
            default: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
        borderRadius: "100%",
        color: "inherit",
        display: "inline-block",
        minHeight: 36,
        minWidth: 36,
    },
    iconInner: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: 36,
        minWidth: 36,
    },
});
