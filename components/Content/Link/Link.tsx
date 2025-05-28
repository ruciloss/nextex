import * as stylex from "@stylexjs/stylex";
import { styles } from "./Link.stylex";

const Link = ({ children }) => {
    return <span {...stylex.props(styles.heading)}>{children}</span>;
};

export default Link;
