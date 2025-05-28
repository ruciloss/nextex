import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";
import Heading from "@/components/Content/Heading/Heading";

export const metadata: Metadata = {
    title: "Security | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
    paragraph: {
        display: "block",
        marginBottom: spacing.xs,
    },
    link: {
        color: `rgba(${colors.primaryR}, ${colors.primaryG}, ${colors.primaryB}, 1)`,
        fontWeight: 600,
        textAlign: "center",
        textDecoration: {
            default: "none",
            ":hover": "underline",
        },
    },
});

const pageSecurity = () => {
    return (
        <Inner>
            <div>
                <Breadcrumbs />
                <Heading level={2}>Security</Heading>
                <span {...stylex.props(styles.paragraph)}>
                    If you discover a security vulnerability in this project, we
                    kindly ask you to report it via our GitHub repository by
                    clicking on{" "}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Link to GitHub"
                        role="link"
                        tabIndex={0}
                        {...stylex.props(styles.link)}
                    >
                        Report a vulnerability
                    </a>
                    .
                </span>
                <span {...stylex.props(styles.paragraph)}>
                    We carefully review all valid reports and aim to address any
                    confirmed issues as quickly as possible.
                </span>
            </div>
            <Footer />
        </Inner>
    );
};

export default pageSecurity;
