import type { Metadata } from "next";
import Inner from "@/components/Layout/Inner/Inner";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";

export const metadata: Metadata = {
    title: "Security | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const pageSecurity = () => {
    return (
        <Inner>
            <div>
                <Heading level={1} size="h2" spacing={3}>
                    Security
                </Heading>
                <Text color="secondary" spacing={2}>
                    If you discover a security vulnerability in this project, we
                    kindly ask you to report it via our GitHub repository by
                    clicking on{" "}
                    <Link
                        href="https://ruciloss.github.io/nextex/security"
                        ariaLabel="Link to Report a vulnerability"
                        variant="linkPrimary"
                        weight="bold"
                    >
                        Report a vulnerability
                    </Link>
                    .
                </Text>
                <Text color="secondary">
                    We carefully review all valid reports and aim to address any
                    confirmed issues as quickly as possible.
                </Text>
            </div>
        </Inner>
    );
};

export default pageSecurity;
