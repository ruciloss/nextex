import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Progressbar.stylex";

type Props = {
    styles?: stylex.StyleXStyles[];
};

const Progressbar = ({ styles = [] }: Props) => {
    return (
        <div
            role="progressbar"
            aria-valuetext="Loading..."
            {...stylex.props(baseStyles.progressbar, ...styles)}
        ></div>
    );
};

export default Progressbar;
