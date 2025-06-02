import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    list: {},

    item: {},

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },

    center: { textAlign: "center" },
    right: { textAlign: "right" },

    /*
    listItem: {
        display: "list-item",
        listStyleType: "disc",
        marginLeft: spacing.md,
    },
    */
});
