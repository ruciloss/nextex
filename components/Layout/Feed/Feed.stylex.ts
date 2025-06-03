import * as stylex from "@stylexjs/stylex";
import { global } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        margin: `${global.headerHeight} auto 0 auto`, // odsazení od sidebarů a navbaru
        maxWidth: 600,
        padding: `0 32px`,
    },
});
