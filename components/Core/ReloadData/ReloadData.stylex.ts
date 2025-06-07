import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    preload: {
        left: "50%",
        position: "absolute",
        top: `calc(${global.headerHeight} + 10px)`,
        transform: "translateX(-50%)",
    },
});
