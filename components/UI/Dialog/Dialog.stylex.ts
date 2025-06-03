import * as stylex from "@stylexjs/stylex";
import { colors, radius } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    dialog: {
        bottom: 0,
        display: "none",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 3,
    },
    inner: {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
    },
    modal: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .25)`,
    },
    header: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
    },
    body: { padding: 10 },
    footer: { padding: 10 },
    overlay: {
        backgroundColor: `rgba(${colors.overlayR}, ${colors.overlayG}, ${colors.overlayB}, .25)`,
        bottom: 0,
        display: "inherit",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: -1,
    },
});
