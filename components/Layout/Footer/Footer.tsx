import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import Logo from "@/components/Content/Logo/Logo";

const Footer = () => (
    <div role="contentinfo" {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.item)}>
            <span {...stylex.props(styles.logo)}>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    {...stylex.props(styles.logo)}
                >
                    <Logo />
                </Link>
            </span>
            <span>Created by Ruciloss &copy; {new Date().getFullYear()}</span>
        </div>
        <div {...stylex.props(styles.item)}>
            <a
                href="https://github.com/ruciloss/nextex/blob/master/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to Licene MIT"
                role="link"
                {...stylex.props(styles.link)}
            >
                License MIT
            </a>
            <span>&bull;</span>
            <span>v1.0.0</span>
        </div>
    </div>
);

export default Footer;
