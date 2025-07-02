import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Sidebar.stylex";
import Footer from "@/components/Layout/Footer/Footer";

type SidebarProps = {
    as?: "div" | "aside";
    ariaLabel: string;
    role: string;
    styles?: stylex.StyleXStyles[];
};

const Sidebar = ({
    as = "div",
    ariaLabel,
    role,
    styles = [],
}: SidebarProps) => {
    const Component = as;

    return (
        <Component
            aria-label={ariaLabel}
            role={role}
            {...stylex.props(baseStyles.sidebar, ...styles)}
        >
            <div></div>
            <Footer />
        </Component>
    );
};

export default Sidebar;
