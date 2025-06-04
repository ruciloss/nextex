import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    breadcrumbs: {
        textTransform: "capitalize",
    },
    divider: {
        margin: `0 ${spacing.xxxs}`,
    },
});
