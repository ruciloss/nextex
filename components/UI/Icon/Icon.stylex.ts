import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    icon: {
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        minHeight: 36,
        minWidth: 36,
    },
    iconInner: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: 36,
        minWidth: 36,
    },
    iconLarge: {
        minHeight: 40,
        minWidth: 40,
    },
});
