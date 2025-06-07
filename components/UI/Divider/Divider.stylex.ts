import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    divider: {
        backgroundColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        height: 1,
        width: "100%",
    },
});
