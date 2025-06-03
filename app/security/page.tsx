import type { Metadata } from "next";
import Feed from "@/components/Layout/Feed/Feed";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";

export const metadata: Metadata = {
    title: "Security | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const PageSecurity = () => {
    return (
        <Feed>
            <div>
                <Heading level={1}>Security</Heading>
                <Text>
                    If you discover a security vulnerability in this project, we
                    kindly ask you to report it via our GitHub repository by
                    clicking on{" "}
                    <Link
                        href="https://ruciloss.github.io/nextex/security"
                        ariaLabel="Link to Report a vulnerability"
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
        </Feed>
    );
};

export default PageSecurity;
