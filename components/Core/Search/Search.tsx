"use client";
import { useState } from "react";
import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Search.stylex";
import {
    HomeIcon,
    InfoIcon,
    MailIcon,
    PhoneIcon,
    UserIcon,
    SearchIcon,
    ArrowLeftIcon,
} from "lucide-react";

const navLinks = [
    {
        href: "/",
        label: "Home",
        description: "Go to the homepage",
        icon: HomeIcon,
    },
    {
        href: "/mit",
        label: "License",
        description: "MIT license info",
        icon: InfoIcon,
    },
    {
        href: "/contact",
        label: "Contact",
        description: "Contact us via email",
        icon: MailIcon,
    },
    {
        href: "/phone",
        label: "Phone",
        description: "Call us directly",
        icon: PhoneIcon,
    },
    {
        href: "/profile",
        label: "Profile",
        description: "View your profile",
        icon: UserIcon,
    },
];

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const filtered =
        query.length > 0
            ? navLinks.filter((item) =>
                  item.label.toLowerCase().includes(query.toLowerCase()),
              )
            : navLinks.slice(0, 3);

    const showDropdown = isFocused;

    return (
        <div>
            <div {...stylex.props(styles.wrapper)}>
                <div {...stylex.props(styles.inputWrapper)}>
                    <SearchIcon size={16} />
                    <input
                        type="text"
                        placeholder="Search NexteX"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() =>
                            setTimeout(() => setIsFocused(false), 150)
                        }
                        {...stylex.props(styles.input)}
                    />
                </div>
            </div>
            <div>
                {showDropdown && (
                    <div {...stylex.props(styles.dropdown)}>
                        {/* 🔙 Tlačítko pro zavření dropdownu */}
                        <div onClick={() => setIsFocused(false)}>
                            <ArrowLeftIcon size={16} />
                        </div>

                        {filtered.length === 0 ? (
                            <span {...stylex.props(styles.notFound)}>
                                No results found
                            </span>
                        ) : (
                            filtered.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    {...stylex.props(styles.link)}
                                >
                                    <div {...stylex.props(styles.item)}>
                                        <span>
                                            <item.icon size={16} />
                                        </span>
                                        <div>
                                            <span
                                                {...stylex.props(styles.title)}
                                            >
                                                {item.label}
                                            </span>
                                            <span
                                                {...stylex.props(
                                                    styles.description,
                                                )}
                                            >
                                                {item.description}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchForm;
