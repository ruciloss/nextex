import * as stylex from "@stylexjs/stylex";
import { colors, spacing, radius } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    wrapper: {
        display: {
            default: "inherit",
            "@media (max-width: 768px)": "none",
        },
        height: "inherit",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: -1,
    },
    list: {
        display: "flex",
        gap: spacing.sm,
        height: "inherit",
    },
    item: {
        borderBottomColor: "transparent",
        borderBottomStyle: "solid",
        borderBottomWidth: 3,
        height: "inherit",
    },
    link: {
        alignItems: "center",
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        },
        borderRadius: radius.sm,
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
        display: {
            default: "flex",
            ":hover > span": "flex",
        },
        gap: spacing.xxxs,
        height: "calc(100% - 8px)",
        justifyContent: "center",
        marginTop: spacing.xxxs,
        position: "relative",
        textDecoration: "none",
        width: 100,
    },
    linkActive: {
        backgroundColor: "transparent",
        borderBottomColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
});
