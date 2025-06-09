"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Search.stylex";
import Link from "@/components/UI/Link/Link";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
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

const Search = () => {
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
            <div {...stylex.props(baseStyles.wrapper)}>
                <div {...stylex.props(baseStyles.inputWrapper)}>
                    <SearchIcon size={16} />
                    <Input
                        type="search"
                        placeholder="Search NexteX"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() =>
                            setTimeout(() => setIsFocused(false), 150)
                        }
                        styles={[baseStyles.input]}
                    />
                </div>
            </div>
            <div>
                {showDropdown && (
                    <div {...stylex.props(baseStyles.dropdown)}>
                        <Button
                            ariaLabel="Back"
                            styles={[baseStyles.closeButton]}
                            onClick={() => setIsFocused(false)}
                        >
                            <ArrowLeftIcon aria-label="Back" size={20} />
                        </Button>
                        <Heading>Recent</Heading>

                        {filtered.length === 0 ? (
                            <div {...stylex.props(baseStyles.notFound)}>
                                <Text>No results found</Text>
                            </div>
                        ) : (
                            filtered.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    ariaLabel={`Link to ${item.label}`}
                                    {...stylex.props(baseStyles.link)}
                                >
                                    <div {...stylex.props(baseStyles.item)}>
                                        <item.icon
                                            size={16}
                                            aria-hidden="true"
                                        />
                                        <div>
                                            <span
                                                {...stylex.props(
                                                    baseStyles.title,
                                                )}
                                            >
                                                {item.label}
                                            </span>
                                            <span
                                                {...stylex.props(
                                                    baseStyles.description,
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

export default Search;
