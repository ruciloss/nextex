import * as stylex from "@stylexjs/stylex";
import { styles } from "./Text.stylex";

type Props = {
    children: React.ReactNode;
    size?: "small";
    color?: "primary" | "secondary" | "error" | "success" | "warning";
    weight?: "bold";
    spacing?: 1 | 2 | 3 | 4 | 5;
    align?: "center" | "right";
};

const Text = ({ children, size, color, weight, spacing, align }: Props) => {
    const stylesArray = [
        styles.text,
        size && styles[size],
        color && styles[color],
        weight && styles[weight],
        spacing && styles[`marginBottom${spacing}` as keyof typeof styles],
        align && styles[align],
    ].filter(Boolean);

    return <span {...stylex.props(...stylesArray)}>{children}</span>;
};

export default Text;
