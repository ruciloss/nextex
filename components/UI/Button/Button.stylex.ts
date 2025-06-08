import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    button: {
        cursor: "pointer",
    },

    btn: {
        borderRadius: radius.sm,
        display: "inline-block",
        fontWeight: 600,
    },

    solid: {
        color: "inherit",
        padding: `${spacing.xxs} ${spacing.xs}`,
    },

    outline: {
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderWidth: "2px",
        padding: `${spacing.xxs} ${spacing.xs}`,
    },

    circle: {
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        height: "40px",
        justifyContent: "center",
        position: "relative",
        width: "40px",
    },

    arrow: {
        alignItems: "center",
        backgroundColor: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        borderColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: "2px",
        bottom: 0,
        display: "flex",
        height: "14px",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        width: "14px",
    },

    primary: {
        backgroundColor: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
        borderColor: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
        color: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
    },

    secondary: {
        backgroundColor: {
            default: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
    },

    transparent: {
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
    },
});
