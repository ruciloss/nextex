"use client";

import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Heading from "@/components/Content/Heading/Heading";
import { FileLock2Icon } from "lucide-react";

const NotFound = () => {
    return (
        <Inner>
            <div>
                <FileLock2Icon
                    size={60}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    {...stylex.props(styles.icon)}
                />
                <Heading level={5}>
                    This content isn&apos;t available right now.
                </Heading>
                <span {...stylex.props(styles.paragraph)}>
                    When this happens, it&apos;s usually because the content is
                    no longer available, the link is broken, or access has been
                    restricted by the owner.
                </span>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    tabIndex={0}
                    {...stylex.props(styles.link)}
                >
                    Go to Homepage
                </Link>
            </div>
        </Inner>
    );
};

export default NotFound;
