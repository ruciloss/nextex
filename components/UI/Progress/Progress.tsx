import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Progress.stylex";

type ProgressProps = {
    styles?: stylex.StyleXStyles[];
    variant?: "bar" | "circle" | "reload";
};

const Progress = ({ variant = "bar", styles = [] }: ProgressProps) => {
    const variantStyles = {
        bar: baseStyles.bar,
        circle: baseStyles.circle,
        reload: baseStyles.reload,
    };

    const progressStyles = {
        bar: baseStyles.progressBar,
        circle: baseStyles.progressCircle,
        reload: [baseStyles.progressCircle, baseStyles.progressReload],
    };

    return (
        <div
            role="progressbar"
            aria-valuetext="Loading..."
            {...stylex.props(
                baseStyles.progress,
                variantStyles[variant],
                ...styles,
            )}
        >
            <div {...stylex.props(progressStyles[variant])} />
        </div>
    );
};

export default Progress;
