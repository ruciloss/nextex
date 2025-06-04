import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Footer.stylex";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import Flex from "@/components/UI/Flex/Flex";

const Footer = () => (
    <div role="contentinfo" {...stylex.props(baseStyles.footer)}>
        <Flex gap={1}>
            <Text size="small">
                Created by Ruciloss &copy; {new Date().getFullYear()}
            </Text>
            <Link href="/mit" ariaLabel="Link to License MIT">
                License MIT
            </Link>
            <Text size="small">&bull;</Text>
            <Text size="small">v1.0.0</Text>
            <Text size="small">&bull;</Text>
            <Breadcrumbs />
        </Flex>
    </div>
);

export default Footer;
