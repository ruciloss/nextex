import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import Logo from "@/components/Content/Logo/Logo";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";

const Footer = () => (
    <div role="contentinfo" {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.item)}>
            <span {...stylex.props(styles.logo)}>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    {...stylex.props(styles.logo)}
                >
                    <Logo />
                </Link>
            </span>
            <Text variant="small">
                Created by Ruciloss &copy; {new Date().getFullYear()}
            </Text>
        </div>
        <div {...stylex.props(styles.item)}>
            <Link href="/mit" aria-label="Link to License MIT">
                License MIT
            </Link>
            <span>&bull;</span>
            <Text variant="small">v1.0.0</Text>
            <span>&bull;</span>
            <Breadcrumbs />
        </div>
    </div>
);

export default Footer;
