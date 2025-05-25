import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        marginBottom: spacing.sm,
    },
    h1: {
        fontSize: text.h2,
        fontWeight: 700,
    },
    h2: {
        fontSize: text.h5,
        fontWeight: 700,
    },
});
