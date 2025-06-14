import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    link: {
        color: "inherit",
        cursor: "pointer",
        textDecoration: {
            default: "none",
            ":hover": "none",
        },
    },
});
