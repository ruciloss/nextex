import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";

export const metadata: Metadata = {
    title: "Security | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
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
                <Heading level={1} variant="h2" spacing={3}>
                    Security
                </Heading>
                <Text spacing={2}>
                    If you discover a security vulnerability in this project, we
                    kindly ask you to report it via our GitHub repository by
                    clicking on{" "}
                    <Link
                        href=""
                        aria-label="Link to Report a vulnerability"
                        {...stylex.props(styles.link)}
                    >
                        Report a vulnerability
                    </Link>
                    .
                </Text>
                <Text>
                    We carefully review all valid reports and aim to address any
                    confirmed issues as quickly as possible.
                </Text>
            </div>
            <Footer />
        </Inner>
    );
};

export default pageSecurity;
