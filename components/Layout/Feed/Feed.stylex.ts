import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    feed: {
        gridArea: "feed",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 600,
        paddingBottom: spacing.xs,
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        paddingTop: spacing.xs,
    },
});
