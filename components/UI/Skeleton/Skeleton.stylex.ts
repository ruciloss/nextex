import * as stylex from "@stylexjs/stylex";
import { animations, colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    skeleton: {
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationName: animations.blink,
        animationTimingFunction: "ease-in-out",
        backgroundColor: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, .75)`,
        borderRadius: "inherit",
        height: 50,
        width: "100%",
    },
});
