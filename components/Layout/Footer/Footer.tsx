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
            <Flex gap={1} wrap="wrap" align="center">
                <Link
                    href="/mit"
                    ariaLabel="Link to License MIT"
                    styles={[baseStyles.link]}
                >
                    <Text size="small" color="secondary">
                        License MIT
                    </Text>
                </Link>
                <Breadcrumbs />
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Text size="small" color="secondary">
                    v1.0.0
                </Text>
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Text size="small" color="secondary">
                    Ruciloss &copy; {new Date().getFullYear()}
                </Text>
            </Flex>
        </Component>
    );
};

export default Footer;
