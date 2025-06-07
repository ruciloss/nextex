import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    input: {},
    radio: {
        backgroundColor: "transparent",
        borderRadius: "50%",
        cursor: "pointer",
        flexShrink: 0,
        height: 12,
        outlineColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, 1)`,
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineWidth: "2px",
        position: "relative",
        width: 12,
        zIndex: 999,
    },
    radioSelected: {
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        borderColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        outlineColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
    },
});
