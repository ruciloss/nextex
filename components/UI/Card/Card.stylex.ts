import * as stylex from "@stylexjs/stylex";
import {
    colors,
    radius,
    spacing,
    text,
} from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
    },
    body: {
        padding: `${spacing.xs} ${spacing.sm}`,
    },
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        fontSize: text.p,
        fontWeight: 600,
        marginBottom: spacing.xxxs,
    },
});
