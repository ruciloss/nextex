import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    button: {
        alignItems: "center",
        backgroundColor: {
            default: `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
            ":hover": `rgba(${colors.bgAltHoverR}, ${colors.bgAltHoverG}, ${colors.bgAltHoverB}, 1)`,
        },
        borderRadius: "100%",
        borderWidth: 0,
        color: "inherit",
        display: "flex",
        justifyContent: "center",
        minHeight: "35px",
        minWidth: "35px",
    },
});
