import * as stylex from "@stylexjs/stylex";
import { animations, colors, duration } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    progress: {
        position: "relative",
        zIndex: 2,
    },

    bar: {
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, .1)`,
        height: 2,
        position: "relative",
        zIndex: 2,
    },

    progressBar: {
        animationDuration: duration.fast,
        animationName: animations.loading,
        animationTimingFunction: "ease-in-out",
        backgroundColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        height: 2,
    },

    circle: {
        alignItems: "center",
        display: "flex",
        height: 24,
        justifyContent: "center",
        width: 24,
    },

    progressCircle: {
        animationDuration: duration.medium,
        animationIterationCount: "infinite",
        animationName: animations.rotate,
        animationTimingFunction: "linear",
        borderColor: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        borderRadius: "50%",
        borderStyle: "solid",
        borderTopColor: "transparent",
        borderWidth: "2px",
        height: 22,
        width: 22,
    },

    reload: {
        alignItems: "center",
        backgroundColor: `rgba(${colors.bgTertiaryR}, ${colors.bgTertiaryG}, ${colors.bgTertiaryB}, 1)`,
        borderRadius: "50%",
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .25)`,
        display: "flex",
        height: 50,
        justifyContent: "center",
        width: 50,
    },

    progressReload: {
        height: 28,
        width: 28,
    },
});
