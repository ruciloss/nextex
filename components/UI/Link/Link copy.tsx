import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";
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

    const wrapperStyles = [
        styles.displayblock,
        align && styles[`${align}` as keyof typeof styles],
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
    ].filter(Boolean);

    const linkStyles = [
        styles.link,
        isButtonVariant && styles.btn,
        styles[variant],
        weight && styles.fontWeightBold,
        !isBtnCircle && styles[`display${display}` as keyof typeof styles],
    ].filter(Boolean);

    const commonProps = stylex.props(...linkStyles);

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

    return <span {...stylex.props(...wrapperStyles)}>{linkElement}</span>;
};

export default Link;
