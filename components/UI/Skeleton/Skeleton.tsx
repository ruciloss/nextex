import * as stylex from "@stylexjs/stylex";
import { styles } from "./Skeleton.stylex";

type Props = {
    customStyles?: stylex.StyleXStyles[];
};

const Skeleton = ({ customStyles = [] }: Props) => (
    <div
        role="presentation"
        {...stylex.props(styles.skeleton, ...customStyles)}
    />
);

export default Skeleton;
