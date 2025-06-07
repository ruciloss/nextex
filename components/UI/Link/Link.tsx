import NextLink from "next/link";
import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Link.stylex";

type LinkProps = {
    href: string;
    children: ReactNode;
    ariaLabel: string;
    size?: "small";
    styles?: stylex.StyleXStyles[];
};

const isExternalLink = (href: string) => {
    return (
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    );
};

const Link = ({ href, children, ariaLabel, size, styles = [] }: LinkProps) => {
    const external = isExternalLink(href);

    const sizeStyles = {
        small: baseStyles.small,
    };

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                role="link"
                tabIndex={0}
                {...stylex.props(
                    baseStyles.link,
                    size ? sizeStyles[size] : undefined,
                    ...styles,
                )}
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
            {...stylex.props(
                baseStyles.link,
                size ? sizeStyles[size] : undefined,
                ...styles,
            )}
        >
            {children}
        </NextLink>
    );
};

export default Link;
