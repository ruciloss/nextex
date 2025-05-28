import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        marginBottom: spacing.xxxs,
    },
    h1: {
        fontSize: text.h1,
        fontWeight: 700,
    },
    h2: {
        fontSize: text.h2,
        fontWeight: 700,
    },
    h3: {
        fontSize: text.h3,
        fontWeight: 700,
    },
    h4: {
        fontSize: text.h4,
        fontWeight: 700,
    },
    h5: {
        fontSize: text.h5,
        fontWeight: 700,
    },
});
