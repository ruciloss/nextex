import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Header.stylex";
import ThemeToggler from "@/components/Core/ThemeToggler/ThemeToggler";
import Logo from "@/components/Content/Logo/Logo";
import GitHubIcon from "@/components/Content/GitHubIcon/GitHubIcon";
import Shortcuts from "@/components/Core/Shortcuts/Shortcuts";
import Search from "@/components/Core/Search/Search";
import Flex from "@/components/UI/Flex/Flex";

type HeaderProps = {
    as?: "div" | "header";
};

const Header = ({ as = "div" }: HeaderProps) => {
    const Component = as;

    return (
        <Component role="banner" {...stylex.props(baseStyles.header)}>
            <Flex gap={2}>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    tabIndex={0}
                    {...stylex.props(baseStyles.logo)}
                >
                    <Logo />
                </Link>
                <Search />
            </Flex>
            <Shortcuts />
            <Flex gap={2}>
                <GitHubIcon />
                <ThemeToggler />
            </Flex>
        </Component>
    );
};

export default Header;
