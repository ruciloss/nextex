import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Sidebar2.stylex";

type SidebarProps = {
    children: React.ReactNode;
    ariaLabel: string;
    role: string;
    styles?: stylex.StyleXStyles[];
};

const Sidebar2 = ({ children, ariaLabel, role, styles = [] }: SidebarProps) => {
    return (
        <div
            aria-label={ariaLabel}
            role={role}
            {...stylex.props(baseStyles.wrapper, ...styles)}
        >
            {children}
        </div>
    );
};

export default Sidebar2;
