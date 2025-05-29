import * as stylex from "@stylexjs/stylex";
import { colors, spacing, radius } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
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
        listStyle: "none",
    },
    item: {
        borderBottomColor: "transparent",
        borderBottomStyle: "solid",
        borderBottomWidth: "3px",
        height: "inherit",
    },
    link: {
        alignItems: "center",
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
        },
        borderRadius: radius.sm,
        color: `rgba(${colors.secondaryTextR}, ${colors.secondaryTextG}, ${colors.secondaryTextB}, 1)`,
        display: "flex",
        gap: spacing.xxxs,
        height: "calc(100% - 8px)",
        justifyContent: "center",
        marginTop: spacing.xxxs,
        textDecoration: "none",
        width: "100px",
    },
    linkActive: {
        backgroundColor: "transparent",
        borderBottomColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
});
