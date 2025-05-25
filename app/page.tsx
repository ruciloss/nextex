import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { colors, radius, spacing, text } from "./globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        fontSize: text.h2,
        fontWeight: 700,
    },
    wrapper: {
        textAlign: "center",
    },
    cardWrapper: {
        alignItems: "center",
        display: "flex",
        gap: spacing.md,
        justifyContent: "center",
        paddingTop: spacing.lg,
    },
    card: {
        backgroundColor: `rgba(${colors.bgSecondaryR}, ${colors.bgSecondaryG}, ${colors.bgSecondaryB}, 1)`,
        borderRadius: radius.md,
        boxShadow: `0 1px 2px rgba(${colors.shadowR}, ${colors.shadowG}, ${colors.shadowB}, .2)`,
        padding: `${spacing.xs} ${spacing.sm}`,
    },
    cardHeading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        fontSize: text.p,
        fontWeight: 700,
        marginBottom: spacing.xxxs,
    },
});

const Homepage = () => {
    return (
        <Inner>
            <div {...stylex.props(styles.wrapper)}>
                <span
                    role="heading"
                    aria-level={1}
                    {...stylex.props(styles.heading)}
                >
                    NexteX
                </span>
                <span>
                    A streamlined starter template leveraging a modern tech
                    stack for rapid development and effortless customization.
                </span>
            </div>

            <div {...stylex.props(styles.cardWrapper)}>
                <div {...stylex.props(styles.card)}>
                    <span {...stylex.props(styles.cardHeading)}>Title</span>
                    <span>
                        Lorem ipsum dolor sit atmet. Lorem ipsum dolor sit
                        atmet.
                    </span>
                </div>
                <div {...stylex.props(styles.card)}>
                    <span {...stylex.props(styles.cardHeading)}>Title</span>
                    <span>
                        Lorem ipsum dolor sit atmet. Lorem ipsum dolor sit
                        atmet.
                    </span>
                </div>
            </div>
            <Footer />
        </Inner>
    );
};

export default Homepage;
