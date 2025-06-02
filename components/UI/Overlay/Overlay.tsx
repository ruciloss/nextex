import * as stylex from "@stylexjs/stylex";
import { styles } from "./Overlay.stylex";

type Props = {
    onClick?: () => void;
    customStyles?: stylex.StyleXStyles[];
};

const Overlay = ({ onClick, customStyles = [] }: Props) => (
    <div
        role="presentation"
        onClick={onClick}
        {...stylex.props(styles.overlay, ...customStyles)}
    />
);

export default Overlay;
