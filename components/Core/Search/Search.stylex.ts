import * as stylex from "@stylexjs/stylex";
import {
    colors,
    global,
    radius,
    spacing,
    text,
} from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    wrapper: {
        backgroundColor: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        borderRadius: radius.lg,
        height: `calc(${global.headerHeight} - ${spacing.xs})`,
        maxWidth: 400,
        position: "relative",
        width: "100%",
        zIndex: 2,
    },
    inputWrapper: {
        alignItems: "center",
        display: "flex",
        gap: spacing.xxs,
        height: "inherit",
        padding: `0 ${spacing.xs}`,
        position: "relative",
        zIndex: 2,
    },
    input: {
        height: "inherit",
        "::placeholder": {
            color: "inherit",
        },
    },
    dropdown: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderBottomLeftRadius: radius.sm,
        borderBottomRightRadius: radius.sm,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        left: 0,
        minWidth: 325,
        padding: `${spacing.xs} ${spacing.xxs}`,
        paddingTop: spacing.xl,
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
    link: {
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        textDecoration: "none",
    },
    item: {
        alignItems: "center",
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        },
        borderRadius: radius.sm,
        cursor: "pointer",
        display: "flex",
        gap: spacing.xxs,
        padding: spacing.xxs,
        textDecoration: "none",
    },
    title: {
        display: "block",
        fontWeight: 600,
    },
    description: {
        color: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, 1)`,
        display: "block",
        fontSize: text.xs,
        paddingRight: spacing.sm,
    },
    notFound: {
        padding: spacing.sm,
    },
    closeButton: {
        alignItems: "center",
        backgroundColor: {
            default: "transparent",
            ":hover": `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        },
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        left: 0,
        marginLeft: spacing.xs,
        marginTop: spacing.xxs,
        minHeight: 40,
        minWidth: 40,
        position: "absolute",
        top: 0,
    },
});
