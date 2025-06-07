import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Divider.stylex";

type DividerProps = {
    as?: "div" | "span";
    vertical?: boolean;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

const Divider = ({ as = "div", vertical = false }: DividerProps) => {
    const Component = as;

    return (
        <Component
            role="separator"
            aria-orientation={vertical ? "vertical" : "horizontal"}
            {...stylex.props(baseStyles.divider)}
        />
    );
};

export default Divider;
