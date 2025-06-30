import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Divider.stylex";

const Divider = () => {
    return (
        <div
            role="separator"
            aria-orientation="horizontal"
            {...stylex.props(baseStyles.divider)}
        />
    );
};

export default Divider;
