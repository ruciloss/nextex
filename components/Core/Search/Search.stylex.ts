import * as stylex from "@stylexjs/stylex";
import {
    colors,
    global,
    radius,
    spacing,
    text,
} from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        backgroundColor: `rgba(${colors.bgAltR}, ${colors.bgAltG}, ${colors.bgAltB}, 1)`,
        borderRadius: radius.lg,
        height: `calc(${global.headerHeight} - ${spacing.xs})`,
        maxWidth: "400px",
        width: "100%",
    },
    inputWrapper: {
        alignItems: "center",
        display: "flex",
        gap: spacing.xxs,
        height: "inherit",
        padding: `0 ${spacing.xs}`,
    },
    input: {
        height: "inherit",
    },

    dropdown: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderBottomLeftRadius: radius.sm,
        borderBottomRightRadius: radius.sm,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        left: 0,
        minWidth: "325px",
        padding: `${spacing.xs} ${spacing.xxs}`,
        paddingTop: spacing.xl,
        position: "absolute",
        top: 0,
        zIndex: -1,
    },
    item: {
        cursor: "pointer",
        display: "flex",
        padding: spacing.xxs,
        textDecoration: "none",
        transition: "background 0.2s",
    },
    title: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
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
});
