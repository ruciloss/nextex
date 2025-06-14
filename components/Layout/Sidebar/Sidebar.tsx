import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Sidebar.stylex";
import List from "@/components/UI/List/List";
import Footer from "@/components/Layout/Footer/Footer";
import Flex from "@/components/UI/Flex/Flex";
import Icon from "@/components/UI/Icon/Icon";
import Link from "@/components/UI/Link/Link";
import Text from "@/components/UI/Text/Text";
import Divider from "@/components/UI/Divider/Divider";
import Tab from "@/components/UI/Tab/Tab";
import { ChevronDown, ChevronRight } from "lucide-react";

type SidebarProps = {
    as?: "div" | "aside";
    ariaLabel: string;
    role: string;
    styles?: stylex.StyleXStyles[];
    align?: "right";
};

const sidebarLinks = [
    {
        href: "/",
        label: "ListItem1",
        iconLeft: ChevronDown,
        iconRight: ChevronRight,
    },
    { href: "/mit", label: "ListItem2", iconLeft: ChevronDown },
    { href: "/security", label: "ListItem3", iconLeft: ChevronRight },
];

const Sidebar = ({
    as = "div",
    ariaLabel,
    role,
    styles = [],
    align,
}: SidebarProps) => {
    const Component = as;

    const alignStyles = {
        right: baseStyles.sidebarRight,
    };

    return (
        <Component
            aria-label={ariaLabel}
            role={role}
            {...stylex.props(
                baseStyles.sidebar,
                align ? alignStyles[align] : undefined,
                ...styles,
            )}
        >
            <Flex direction="column" gap={4}>
                <List ariaLabel="List" as="ul">
                    {sidebarLinks.map(
                        ({
                            href,
                            label,
                            iconLeft: IconLeft,
                            iconRight: IconRight,
                        }) => (
                            <List.Item key={href}>
                                <Link
                                    href={href}
                                    ariaLabel={`Link to ${label}`}
                                >
                                    <Tab>
                                        <Flex
                                            gap={2}
                                            align="center"
                                            justify="between"
                                        >
                                            <Flex gap={2} align="center">
                                                {IconLeft && (
                                                    <Icon bg="secondary">
                                                        <IconLeft />
                                                    </Icon>
                                                )}
                                                <Text>{label}</Text>
                                            </Flex>

                                            {IconRight && (
                                                <Icon>
                                                    <IconRight />
                                                </Icon>
                                            )}
                                        </Flex>
                                    </Tab>
                                </Link>
                            </List.Item>
                        ),
                    )}
                </List>
                <Divider />
            </Flex>
            <Footer />
        </Component>
    );
};

export default Sidebar;
