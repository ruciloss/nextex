import * as stylex from "@stylexjs/stylex";
import { text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    heading: {
        fontWeight: 600,
    },

    h1: { fontSize: text.h1 },
    h2: { fontSize: text.h2 },
    h3: { fontSize: text.h3 },
    h4: { fontSize: text.h4 },
    h5: { fontSize: text.h5 },
    h6: { fontSize: text.p },
    h7: { fontSize: text.sm },
    h8: { fontSize: text.xs },
    h9: { fontSize: text.xxs },
});
