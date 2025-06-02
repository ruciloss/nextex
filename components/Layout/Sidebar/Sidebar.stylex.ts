import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
        justifyContent: "start",
        maxWidth: "360px",
        minWidth: "280px",
        width: "100%",
    },
});
