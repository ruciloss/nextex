import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Progress.stylex";

type ProgressProps = {
    styles?: stylex.StyleXStyles[];
    variant?: "circle" | "bar" | "preload";
};

const Progress = ({ variant = "circle", styles = [] }: ProgressProps) => {
    const variantStyles = {
        circle: baseStyles.circle,
        bar: baseStyles.bar,
        preload: baseStyles.preload,
    };

    const progressStyles = {
        circle: baseStyles.circleProgress,
        bar: baseStyles.barProgress,
        preload: baseStyles.preloadProgress,
    };

    return (
        <div
            role="progressbar"
            aria-valuetext="Loading..."
            {...stylex.props(variantStyles[variant], ...styles)}
        >
            <div {...stylex.props(progressStyles[variant])} />
        </div>
    );
};

export default Progress;
