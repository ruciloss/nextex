import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";
import NextLink from "next/link";
import React, { ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
    ariaLabel?: string;
};

const isExternalLink = (href: string) => {
    return (
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    );
};

const Link = ({ href, children, ariaLabel }: Props) => {
    const external = isExternalLink(href);

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel || undefined}
                role="link"
                tabIndex={0}
                {...stylex.props(styles.link)}
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink
            href={href}
            aria-label={ariaLabel || undefined}
            role="link"
            tabIndex={0}
            {...stylex.props(styles.link)}
        >
            {children}
        </NextLink>
    );
};

export default Link;
