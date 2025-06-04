import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    feed: {
        margin: `${global.headerHeight} auto 0 auto`,
        maxWidth: 600,
        padding: `0 32px`,
    },
});
