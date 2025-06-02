import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    button: {
        alignItems: "center",
        backgroundColor: {
            default: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
        borderRadius: "100%",
        color: "inherit",
        display: "flex",
        justifyContent: "center",
        minHeight: "40px",
        minWidth: "40px",
    },
});
