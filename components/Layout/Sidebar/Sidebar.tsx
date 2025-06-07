import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Sidebar.stylex";
import List from "@/components/UI/List/List";
import Footer from "@/components/Layout/Footer/Footer";
import Flex from "@/components/UI/Flex/Flex";
import Icon from "@/components/UI/Icon/Icon";
import Link from "@/components/UI/Link/Link";
import Text from "@/components/UI/Text/Text";
import { ChevronDown, ChevronRight } from "lucide-react";

type SidebarProps = {
    ariaLabel: string;
    role: string;
    styles?: stylex.StyleXStyles[];
    align?: "right";
};

const Sidebar = ({ ariaLabel, role, styles = [], align }: SidebarProps) => {
    const alignStyles = {
        right: baseStyles.siderbarRight,
    };

    return (
        <div
            aria-label={ariaLabel}
            role={role}
            {...stylex.props(
                baseStyles.sidebar,
                align ? alignStyles[align] : undefined,
                ...styles,
            )}
        >
            <List ariaLabel="List">
                <List.Item>
                    <Link href="/" ariaLabel="Test">
                        <Flex gap={2}>
                            <Icon bg="secondary">
                                <ChevronDown />
                            </Icon>
                            <Text>ListItem2</Text>
                            <ChevronRight />
                        </Flex>
                    </Link>
                </List.Item>
                <List.Item>
                    <Link href="/" ariaLabel="Test">
                        <Flex gap={2}>
                            <Icon>
                                <ChevronDown />
                            </Icon>
                            <Text>ListItem2</Text>
                        </Flex>
                    </Link>
                </List.Item>
                <List.Item>
                    <Link href="/" ariaLabel="Test">
                        <Flex gap={2}>
                            <Icon>
                                <ChevronDown />
                            </Icon>
                            <Text>ListItem2</Text>
                        </Flex>
                    </Link>
                </List.Item>
            </List>
            <Footer />
        </div>
    );
};

export default Sidebar;
