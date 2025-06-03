import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Skeleton.stylex";

type Props = {
    styles?: stylex.StyleXStyles[];
};

const Skeleton = ({ styles = [] }: Props) => (
    <div
        role="presentation"
        aria-busy="true"
        aria-label="Loading..."
        {...stylex.props(baseStyles.skeleton, ...styles)}
    />
);

export default Skeleton;
