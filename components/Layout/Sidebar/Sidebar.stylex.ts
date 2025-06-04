import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    sidebar: {
        bottom: 0,
        maxWidth: "360px",
        minWidth: "280px",
        overflowY: "auto",
        padding: "16px",
        position: "fixed",
        top: global.headerHeight,
        width: "280px",
    },
});
