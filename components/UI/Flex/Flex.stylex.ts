import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    flex: {
        alignItems: "center",
        display: "flex",
    },

    wrap: { flex: "wrap" },

    gap1: { gap: spacing.xxxs },
    gap2: { gap: spacing.xxs },
    gap3: { gap: spacing.xs },
    gap4: { gap: spacing.sm },
    gap5: { gap: spacing.md },
    gap6: { gap: spacing.lg },
    gap7: { gap: spacing.xl },
    gap8: { gap: spacing.xxl },
    gap9: { gap: spacing.xxxl },
});
