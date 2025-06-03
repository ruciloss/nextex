import * as stylex from "@stylexjs/stylex";
import { animations, colors } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    progressbar: {
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationName: animations.blink,
        animationTimingFunction: "ease-in-out",
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        height: 4,
        width: "100%",
    },
});
