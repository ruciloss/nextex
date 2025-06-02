import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    dropdown: {},
    item: {
        display: "list-item",
        listStyleType: "disc",
        marginLeft: spacing.md,
    },
});
