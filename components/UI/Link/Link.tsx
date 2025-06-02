import NextLink from "next/link";
import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";

type Props = {
    href: string;
    children: ReactNode;
    ariaLabel: string;
    customStyles?: stylex.StyleXStyles[];
};

const isExternalLink = (href: string) => {
    return (
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    );
};

const Link = ({ href, children, ariaLabel, customStyles = [] }: Props) => {
    const external = isExternalLink(href);

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                role="link"
                tabIndex={0}
                {...stylex.props(styles.link, ...customStyles)}
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink
            href={href}
            aria-label={ariaLabel}
            role="link"
            tabIndex={0}
            {...stylex.props(styles.link, ...customStyles)}
        >
            {children}
        </NextLink>
    );
};

export default Link;
