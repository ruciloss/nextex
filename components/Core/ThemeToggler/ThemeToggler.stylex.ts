import * as stylex from "@stylexjs/stylex";
import {
    colors,
    spacing,
    radius,
    text,
} from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "inline-block",
        position: "relative",
    },
    button: {
        alignItems: "center",
        backgroundColor: {
            default: `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
            ":hover": `rgba(${colors.bgAltHoverR}, ${colors.bgAltHoverG}, ${colors.bgAltHoverB}, 1)`,
        },
        borderRadius: "100%",
        borderWidth: 0,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        minHeight: "40px",
        minWidth: "40px",
        position: "relative",
    },
    dropdown: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        marginTop: spacing.xs,
        minWidth: "360px",
        padding: `${spacing.xs} ${spacing.xxs}`,
        position: "absolute",
        right: 0,
    },
    header: {
        alignItems: "start",
        display: "flex",
        gap: spacing.xxs,
        marginBottom: spacing.sm,
    },
    heading: {
        display: "block",
        fontSize: text.p,
        fontWeight: 700,
        marginBottom: spacing.xxxs,
    },
    description: {
        color: `rgba(${colors.secondaryTextR}, ${colors.secondaryTextG}, ${colors.secondaryTextB}, 1)`,
        display: "block",
    },
    icon: {
        alignItems: "center",
        backgroundColor: `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        minHeight: "35px",
        minWidth: "35px",
    },
    item: {
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
        },
        borderRadius: radius.sm,
        caretColor: "transparent",
        cursor: "pointer",
        marginBottom: spacing.xxxs,
        marginLeft: spacing.lg,
        padding: `${spacing.xxs}`,
    },
    itemContent: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
    },
    itemTitle: {
        display: "block",
        fontWeight: 600,
    },
    itemDescription: {
        color: `rgba(${colors.secondaryTextR}, ${colors.secondaryTextG}, ${colors.secondaryTextB}, 1)`,
        display: "block",
        fontSize: text.xs,
        paddingRight: spacing.sm,
    },
    radio: {
        backgroundColor: "transparent",
        borderRadius: "50%",
        flexShrink: 0,
        height: "12px",
        left: "-4px",
        outlineColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
        position: "relative",
        width: "12px",
    },
    radioSelected: {
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        borderColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        outlineColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
    arrow: {
        alignItems: "center",
        backgroundColor: `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
        borderColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: "100%",
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
});
