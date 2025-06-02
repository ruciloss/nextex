import * as stylex from "@stylexjs/stylex";
import { styles } from "./Heading.stylex";

type Props = {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5;
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    spacing?: 1 | 2 | 3 | 4 | 5;
    weight?: "regular" | "bold";
    align?: "center" | "right";
};

const Heading = ({
    children,
    level,
    size = "h1",
    spacing,
    weight,
    align,
}: Props) => {
    const stylesArray = [
        styles.heading,
        styles[size],
        weight && styles[weight],
        align && styles[align],
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
    ].filter(Boolean);

    const accessibilityProps = level
        ? { role: "heading", "aria-level": level }
        : {};

    return (
        <span {...accessibilityProps} {...stylex.props(...stylesArray)}>
            {children}
        </span>
    );
};

export default Heading;
