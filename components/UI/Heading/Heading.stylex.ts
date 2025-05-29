import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
    },

    displayblock: { display: "block" },
    displayinline: { display: "inline-block" },

    fontWeight400: { fontWeight: 400 },
    fontWeight600: { fontWeight: 600 },
    fontWeight700: { fontWeight: 700 },

    h1: { fontSize: text.h1 },
    h2: { fontSize: text.h2 },
    h3: { fontSize: text.h3 },
    h4: { fontSize: text.h4 },
    h5: { fontSize: text.h5 },
    h6: { fontSize: text.p },

    marginBottom1: { marginBottom: spacing.xxxs },
    marginBottom2: { marginBottom: spacing.xxs },
    marginBottom3: { marginBottom: spacing.xs },
    marginBottom4: { marginBottom: spacing.sm },
    marginBottom5: { marginBottom: spacing.md },

    textAligncenter: { textAlign: "center" },
    textAlignleft: { textAlign: "left" },
    textAlignright: { textAlign: "right" },
});
