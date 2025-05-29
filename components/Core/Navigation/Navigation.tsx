"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Navigation.stylex";
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

const Navigation = () => {
    const pathname = usePathname();

    return (
        <div role="navigation" {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.list)} role="list">
                {navLinks.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <span
                            key={href}
                            {...stylex.props(
                                styles.item,
                                isActive && styles.linkActive,
                            )}
                            role="listitem"
                        >
                            <Link
                                key={href}
                                href={href}
                                {...stylex.props(
                                    styles.link,
                                    isActive && styles.linkActive,
                                )}
                                aria-label={`Link to ${label}`}
                                role="link"
                                tabIndex={0}
                            >
                                <Icon size={24} aria-hidden="true" />
                            </Link>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
