import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";
import ThemeToggler from "@/components/Core/ThemeToggler/ThemeToggler";
import Logo from "@/components/Content/Logo/Logo";
import GitHubIcon from "@/components/Content/GitHubIcon/GitHubIcon";
import Navigation from "@/components/Core/Navigation/Navigation";
import Search from "@/components/Core/Search/Search";

const Header = () => {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.wrapperInner)}>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    tabIndex={0}
                    {...stylex.props(styles.logo)}
                >
                    <Logo />
                </Link>
                <Search />
            </div>
            <Navigation />
            <div {...stylex.props(styles.wrapperInner)}>
                <GitHubIcon />
                <ThemeToggler />
            </div>
        </div>
    );
};

export default Header;
