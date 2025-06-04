import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Link.stylex";
import NextLink from "next/link";

type Props = {
    href: string;
    children: React.ReactNode;
    ariaLabel: string;
    variant?: "link" | "linkPrimary" | "btnSolid" | "btnOutline" | "btnCircle";
    spacing?: 1 | 2 | 3 | 4 | 5;
    weight?: "bold";
    align?: "center" | "right";
    display?: "block" | "inline";
};

const isExternalLink = (href: string) => {
    return (
        /^https?:\/\//.test(href) ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    );
};

const Link = ({
    href,
    children,
    ariaLabel,
    variant = "link",
    weight,
    align,
    spacing,
    display = "block",
}: Props) => {
    const external = isExternalLink(href);
    const isButtonVariant = variant.startsWith("btn");
    const isBtnCircle = variant === "btnCircle";

    const wrapperbaseStyles = [
        baseStyles.displayblock,
        align && baseStyles[`${align}` as keyof typeof baseStyles],
        spacing &&
            baseStyles[`marginBottom${spacing}` as keyof typeof baseStyles],
    ].filter(Boolean);

    const linkbaseStyles = [
        baseStyles.link,
        isButtonVariant && baseStyles.btn,
        baseStyles[variant],
        weight && baseStyles.fontWeightBold,
        !isBtnCircle &&
            baseStyles[`display${display}` as keyof typeof baseStyles],
    ].filter(Boolean);

    const commonProps = stylex.props(...linkbaseStyles);

    const linkElement = external ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            role="link"
            tabIndex={0}
            {...commonProps}
        >
            {children}
        </a>
    ) : (
        <NextLink
            href={href}
            aria-label={ariaLabel}
            role="link"
            tabIndex={0}
            {...commonProps}
        >
            {children}
        </NextLink>
    );

    return <span {...stylex.props(...wrapperbaseStyles)}>{linkElement}</span>;
};

export default Link;
