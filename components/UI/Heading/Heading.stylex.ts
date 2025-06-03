import * as stylex from "@stylexjs/stylex";
import { spacing, text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    heading: {
        display: "block",
        fontWeight: 700,
    },

    regular: { fontWeight: 400 },
    bold: { fontWeight: 600 },

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

    center: { textAlign: "center" },
    right: { textAlign: "right" },
});
