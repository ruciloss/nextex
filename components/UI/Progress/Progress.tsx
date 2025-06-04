import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Progress.stylex";

type ProgressProps = {
    styles?: stylex.StyleXStyles[];
};

const Progress = ({ styles = [] }: ProgressProps) => {
    return (
        <div
            role="progressbar"
            aria-valuetext="Loading..."
            {...stylex.props(baseStyles.progress, ...styles)}
        ></div>
    );
};

export default Progress;
