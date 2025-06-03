import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    wrapper: {
        bottom: 0,
        maxWidth: "360px",
        minWidth: "280px",
        overflowY: "auto",
        padding: "16px",
        position: "fixed",
        right: 0,
        top: global.headerHeight,
        width: "280px",
    },
});
