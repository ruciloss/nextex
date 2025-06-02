import * as stylex from "@stylexjs/stylex";
import { styles } from "./Sidebar.stylex";

type CardProps = {
    children: React.ReactNode;
    ariaLabel: string;
    role: string;
    customStyles?: stylex.StyleXStyles[];
};

const Card = ({ children, ariaLabel, role, customStyles = [] }: CardProps) => {
    return (
        <div
            {...stylex.props(styles.wrapper, ...customStyles)}
            aria-label={ariaLabel}
            role={role}
        >
            {children}
        </div>
    );
};

export default Card;
