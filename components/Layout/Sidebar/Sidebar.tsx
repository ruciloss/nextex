import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Sidebar.stylex";
import List from "@/components/UI/List/List";
import Footer from "@/components/Layout/Footer/Footer";

type SidebarProps = {
    children: React.ReactNode;
    ariaLabel: string;
    role: string;
    styles?: stylex.StyleXStyles[];
};

const Sidebar = ({ children, ariaLabel, role, styles = [] }: SidebarProps) => {
    return (
        <div
            aria-label={ariaLabel}
            role={role}
            {...stylex.props(baseStyles.sidebar, ...styles)}
        >
            <List ariaLabel="List">
                <List.Item>d</List.Item>

                <List.Item>d</List.Item>

                <List.Item>dasdsa</List.Item>
            </List>
            <Footer />

            {children}
        </div>
    );
};

export default Sidebar;
