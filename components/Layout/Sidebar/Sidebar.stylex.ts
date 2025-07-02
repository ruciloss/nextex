import * as stylex from "@stylexjs/stylex";
import { global, spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    sidebar: {
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        left: 0,
        padding: spacing.xs,
        position: "fixed",
        top: global.headerHeight,
        width: "360px",
    },
});
