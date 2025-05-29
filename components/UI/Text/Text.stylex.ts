import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    displayblock: { display: "block" },
    displayinline: { display: "inline-block" },

    fontSmall: { fontSize: text.xs },

    fontWeight600: { fontWeight: 600 },

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },

    textAligncenter: { textAlign: "center" },
    textAlignleft: { textAlign: "left" },
    textAlignright: { textAlign: "right" },
});
