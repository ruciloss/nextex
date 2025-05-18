import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { colors, text } from "./globalTokens.stylex";
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
            <Footer />
        </Inner>
    );
};

export default Homepage;
