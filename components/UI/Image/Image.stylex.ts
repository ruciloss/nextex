import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    wrapper: {
        aspectRatio: "16 / 9",
        overflow: "hidden",
        position: "relative",
        width: "100%",
    },
    image: {
        objectFit: "cover",
    },
});
