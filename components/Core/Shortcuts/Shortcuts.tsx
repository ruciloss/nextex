"use client";

import Link from "@/components/UI/Link/Link";
import { usePathname } from "next/navigation";
import { baseStyles } from "./Shortcuts.stylex";
import Navigation from "@/components/UI/Navigation/Navigation";
import List from "@/components/UI/List/List";
import Tooltip from "@/components/UI/Tooltip/Tooltip";

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

const Shortcuts = () => {
    const pathname = usePathname();

    return (
        <Navigation ariaLabel="Shortcuts" styles={[baseStyles.wrapper]}>
            <List
                ariaLabel="Shortcuts"
                direction="row"
                styles={[baseStyles.list]}
            >
                {navLinks.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <List.Item
                            key={href}
                            styles={[
                                baseStyles.item,
                                isActive && baseStyles.linkActive,
                            ]}
                        >
                            <Link
                                key={href}
                                href={href}
                                styles={[
                                    baseStyles.link,
                                    isActive && baseStyles.linkActive,
                                ]}
                                ariaLabel={`Link to ${label}`}
                            >
                                <Icon size={24} />
                                <Tooltip>{label}</Tooltip>
                            </Link>
                        </List.Item>
                    );
                })}
            </List>
        </Navigation>
    );
};

export default Shortcuts;
