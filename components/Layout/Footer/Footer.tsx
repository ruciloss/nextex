import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Footer.stylex";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import Flex from "@/components/UI/Flex/Flex";

type FooterProps = {
    as?: "div" | "footer";
};

const Footer = ({ as = "div" }: FooterProps) => {
    const Component = as;

    return (
        <Component role="contentinfo" {...stylex.props(baseStyles.footer)}>
            <Flex gap={1} wrap="wrap">
                <Text size="small" color="secondary">
                    Created by Ruciloss &copy; {new Date().getFullYear()}
                </Text>
                <Link href="/mit" ariaLabel="Link to License MIT" size="small">
                    <Text color="secondary">License MIT</Text>
                </Link>
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Text size="small" color="secondary">
                    v1.0.0
                </Text>
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Breadcrumbs />
            </Flex>
        </Component>
    );
};

export default Footer;
