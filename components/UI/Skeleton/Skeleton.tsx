import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Skeleton.stylex";

type SkeletonProps = {
    styles?: stylex.StyleXStyles[];
};

const Skeleton = ({ styles = [] }: SkeletonProps) => (
    <div
        role="progressbar"
        aria-valuetext="Loading..."
        aria-busy="true"
        {...stylex.props(baseStyles.skeleton, ...styles)}
    />
);

export default Skeleton;
