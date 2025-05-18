import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: spacing.lg,
        justifyContent: "start",
        margin: "auto",
        maxWidth: "600px",
        padding: `0 ${spacing.xs}`,
        width: "100%",
    },
});
