import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    container: {
        display: "flex",
        marginTop: global.headerHeight,
        minHeight: "100vh",
    },
});
