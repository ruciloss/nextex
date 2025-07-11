import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    card: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, .75)`,
        borderRadius: radius.sm,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .25)`,
    },
});
