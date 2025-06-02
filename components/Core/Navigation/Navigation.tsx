"use client";

import Link from "@/components/UI/Link/Link";
import { usePathname } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Navigation.stylex";
import Navigation from "@/components/Core/Navigation/Navigation";
import List from "@/components/UI/List/List";
import {
    OctagonAlertIcon,
    BadgeCheckIcon,
    HeartIcon,
    HomeIcon,
    ShieldIcon,
} from "lucide-react";

const navLinks = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/mit", label: "MIT", icon: BadgeCheckIcon },
    { href: "/security", label: "Security", icon: ShieldIcon },
    { href: "/codex", label: "Code of Conduct", icon: HeartIcon },
    { href: "/error", label: "Error", icon: OctagonAlertIcon },
];

const MainMenu = () => {
    const pathname = usePathname();

    return (
        <Navigation ariaLabel="Shortcuts" {...stylex.props(styles.wrapper)}>
            <List {...stylex.props(styles.list)} ariaLabel="Shortcuts">
                {navLinks.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <List.Item
                            key={href}
                            {...stylex.props(
                                styles.item,
                                isActive && styles.linkActive,
                            )}
                        >
                            <Link
                                key={href}
                                href={href}
                                customStyles={[
                                    styles.link,
                                    isActive && styles.linkActive,
                                ]}
                                ariaLabel={`Link to ${label}`}
                            >
                                <Icon size={24} />
                            </Link>
                        </List.Item>
                    );
                })}
            </List>
        </Navigation>
    );
};

export default MainMenu;
