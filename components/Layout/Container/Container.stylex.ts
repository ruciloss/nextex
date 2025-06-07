import * as stylex from "@stylexjs/stylex";

export const baseStyles = stylex.create({
    container: {
        display: "grid",
        gridTemplateAreas: `"header header header" "left feed right"`,
        gridTemplateColumns: "minmax(280px, 360px) 1fr minmax(280px, 360px)",
        gridTemplateRows: "56px 1fr",
        minHeight: "100vh",
    },
});
