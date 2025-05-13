import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        display: "flex",
        minHeight: "100vh",
        paddingTop: global.headerHeight,
        position: "relative",
    },
});
