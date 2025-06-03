import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        display: "flex",
        fontSize: text.xs,
        textTransform: "capitalize",
    },
    divider: {
        margin: `0 ${spacing.xxxs}`,
    },
});
