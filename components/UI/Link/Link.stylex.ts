import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    link: {
        color: "inherit",
        cursor: "pointer",
        display: {
            default: "flex",
            ":hover > span": "flex",
        },
        position: "relative",
        textDecoration: {
            default: "none",
            ":hover": "none",
        },
    },
});
