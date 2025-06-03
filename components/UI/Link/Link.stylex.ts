import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    link: {
        cursor: "pointer",
    },
    /*
    link: {
        color: "inherit",
        display: "inline-block",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
*/
    linkPrimary: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },

    displayblock: { display: "block" },
    displayinline: { display: "inline-block" },

    fontWeightBold: { fontWeight: 600 },

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },

    center: { textAlign: "center" },
    right: { textAlign: "right" },

    btn: {
        borderRadius: radius.sm,
        borderWidth: 0,
        cursor: "pointer",
        fontWeight: 600,
        textAlign: "center",
        textDecoration: "none",
    },

    btnSolid: {
        backgroundColor: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
        color: "#fff",
        padding: `${spacing.xxxs} ${spacing.xxs}`,
    },

    btnOutline: {
        backgroundColor: "transparent",
        borderColor: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
        borderStyle: "solid",
        borderWidth: "2px",
        color: {
            default: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
            ":hover": `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        },
        padding: `${spacing.xxxs} ${spacing.xxs}`,
    },

    btnCircle: {
        alignItems: "center",
        backgroundColor: {
            default: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
            ":hover": `rgba(${colors.bgTertiaryHoverR}, ${colors.bgTertiaryHoverG}, ${colors.bgTertiaryHoverB}, 1)`,
        },
        borderRadius: "50%",
        display: "flex",
        height: "40px",
        justifyContent: "center",
        position: "relative",
        width: "40px",
    },
});
