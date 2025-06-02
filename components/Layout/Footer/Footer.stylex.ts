import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        borderTopColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        display: "flex",
        gap: spacing.sm,
        justifyContent: "space-between",
        paddingTop: spacing.xs,
        width: "100%",
    },
    item: {
        alignItems: "center",
        display: "flex",
        gap: spacing.xxs,
    },
});
