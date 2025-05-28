import * as stylex from "@stylexjs/stylex";
import { styles } from "./Inner.stylex";

type CardProps = {
    children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
    return <div {...stylex.props(styles.wrapper)}>{children}</div>;
};

export default Card;
