import * as stylex from "@stylexjs/stylex";
import { animations, colors, duration } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    skeleton: {
        animationDuration: duration.medium,
        animationIterationCount: "infinite",
        animationName: animations.blink,
        animationTimingFunction: "ease-in-out",
        backgroundColor: `rgba(${colors.foregroundR}, ${colors.foregroundG}, ${colors.foregroundB}, .75)`,
        borderRadius: "inherit",
        height: "100%",
        width: "100%",
    },
});
