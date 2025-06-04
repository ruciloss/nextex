import * as stylex from "@stylexjs/stylex";
import { colors, spacing, radius } from "./globalTokens.stylex";

const boxStyles = stylex.create({
    base: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        height: 100,
        marginBottom: spacing.sm,
        width: 100,
    },
    radiusXs: {
        borderRadius: radius.xs,
    },
    radiusSm: {
        borderRadius: radius.sm,
    },
    radiusMd: {
        borderRadius: radius.md,
    },
    radiusLg: {
        borderRadius: radius.lg,
    },
    radiusXl: {
        borderRadius: radius.xl,
    },
});

const RadiusBoxes = () => {
    return (
        <div>
            <div {...stylex.props(boxStyles.base, boxStyles.radiusXs)}>xs</div>
            <div {...stylex.props(boxStyles.base, boxStyles.radiusSm)}>sm</div>
            <div {...stylex.props(boxStyles.base, boxStyles.radiusMd)}>md</div>
            <div {...stylex.props(boxStyles.base, boxStyles.radiusLg)}>lg</div>
            <div {...stylex.props(boxStyles.base, boxStyles.radiusXl)}>xl</div>
        </div>
    );
};

export default RadiusBoxes;
