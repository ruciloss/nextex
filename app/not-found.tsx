"use client";

import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import { FileLock2Icon } from "lucide-react"; // Import ikony

const NotFound = () => {
    return (
        <Inner>
            <div>
                <FileLock2Icon
                    size={60}
                    strokeWidth={1.5}
                    {...stylex.props(styles.icon)}
                    aria-hidden="true"
                />
                <span
                    role="heading"
                    aria-level={1}
                    {...stylex.props(styles.heading)}
                >
                    This content isn&apos;t available right now.
                </span>
                <span {...stylex.props(styles.paragraph)}>
                    When this happens, it&apos;s usually because the content is
                    no longer available, the link is broken, or access has been
                    restricted by the owner.
                </span>
                <Link
                    {...stylex.props(styles.link)}
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    tabIndex={0}
                >
                    Go to Homepage
                </Link>
            </div>
        </Inner>
    );
};

export default NotFound;
