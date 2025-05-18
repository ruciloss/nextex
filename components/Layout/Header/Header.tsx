import Link from "next/link";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";
import ThemeToggler from "@/components/Core/ThemeToggler/ThemeToggler";
import Logo from "@/components/Content/Logo/Logo";
import SocialIcon from "@/components/Content/SocialIcon/SocialIcon";

const Header = () => {
    return (
        <div role="banner" {...stylex.props(styles.wrapper)}>
            <div {...stylex.props(styles.wrapperInner)}>
                <Link
                    href="/"
                    aria-label="Link to Homepage"
                    role="link"
                    {...stylex.props(styles.logo)}
                >
                    <Logo />
                </Link>
            </div>
            <div {...stylex.props(styles.wrapperInner)}>
                <SocialIcon />
                <ThemeToggler />
            </div>
        </div>
    );
};

export default Header;
