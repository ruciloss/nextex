import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Divider.stylex";
import { globalStyles } from "../../../app/globalStyles.stylex";

type DividerProps = {
    as?: "div" | "span";
    vertical?: boolean;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

const Divider = ({ as = "div", vertical = false, gap }: DividerProps) => {
    const marginBottom = {
        1: globalStyles.marginBottom1,
        2: globalStyles.marginBottom2,
        3: globalStyles.marginBottom3,
        4: globalStyles.marginBottom4,
        5: globalStyles.marginBottom5,
        6: globalStyles.marginBottom6,
        7: globalStyles.marginBottom7,
        8: globalStyles.marginBottom8,
        9: globalStyles.marginBottom9,
        10: globalStyles.marginBottom10,
    };

    const Component = as;

    return (
        <Component
            role="separator"
            aria-orientation={vertical ? "vertical" : "horizontal"}
            {...stylex.props(
                baseStyles.divider,
                gap ? marginBottom[gap] : undefined,
            )}
        />
    );
};

export default Divider;
