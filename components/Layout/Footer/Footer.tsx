import * as stylex from "@stylexjs/stylex";
import { styles } from "./Footer.stylex";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";

const Footer = () => (
    <div role="contentinfo" {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.item)}>
            <Text>Created by Ruciloss &copy; {new Date().getFullYear()}</Text>
        </div>
        <div {...stylex.props(styles.item)}>
            <Link href="/mit" ariaLabel="Link to License MIT">
                License MIT
            </Link>
            <Text>&bull;</Text>
            <Text>v1.0.0</Text>
            <Text>&bull;</Text>
            <Breadcrumbs />
        </div>
    </div>
);

export default Footer;
