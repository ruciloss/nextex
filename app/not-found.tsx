"use client";

import * as stylex from "@stylexjs/stylex";
import { spacing } from "./globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import { FileLock2Icon } from "lucide-react";

export const styles = stylex.create({
    icon: {
        display: "block",
        margin: "auto",
        marginBottom: spacing.xs,
    },
});

const NotFound = () => {
    return (
        <Inner>
            <div>
                <FileLock2Icon
                    size={60}
                    strokeWidth={1.5}
                    {...stylex.props(styles.icon)}
                />

                <Heading level={1}>
                    This content isn&apos;t available right now.
                </Heading>

                <Text>
                    When this happens, it&apos;s usually because the content is
                    no longer available, the link is broken, or access has been
                    restricted by the owner.
                </Text>

                <Link href="/" ariaLabel="Link to Homepage">
                    Go to Homepage
                </Link>
            </div>
        </Inner>
    );
};

export default NotFound;
