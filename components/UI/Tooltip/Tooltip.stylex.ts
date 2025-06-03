import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    tooltip: {
        position: "relative",
    },
    item: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        left: 0,
        padding: 5,
        position: "absolute",
        top: "100%",
    },
});
