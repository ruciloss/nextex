import * as stylex from "@stylexjs/stylex";
import { spacing } from "./globalTokens.stylex";

export const styles = stylex.create({
    icon: {
        display: "block",
        margin: "auto",
        marginBottom: spacing.xs,
    },
});
