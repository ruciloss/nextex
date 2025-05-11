import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../../../app/globalTokens.stylex";

export const styles = stylex.create({
    wrapper: {
        alignItems: "center",
        backdropFilter: "blur(6px)",
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, .75)`,
        borderBottomColor: `rgba(${colors.borderR}, ${colors.borderG}, ${colors.borderB}, .25)`,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .1)`,
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteG}, 1)`,
        display: "flex",
        justifyContent: "space-between",
        left: 0,
        margin: "auto",
        padding: `${spacing.xxs} ${spacing.xs}`,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9999,
    },
    wrapperInner: {
        alignItems: "center",
        display: "flex",
        gap: spacing.xxs,
    },
    logo: {
        display: "flex",
        height: "auto",
        width: "40px",
    },
});
