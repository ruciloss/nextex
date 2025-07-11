import NextImage from "next/image";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Image.stylex";

type ImageProps = {
    src: string;
    alt: string;
    styles?: stylex.StyleXStyles[];
};

const Image = ({ src, alt, styles = [] }: ImageProps) => {
    return (
        <div {...stylex.props(baseStyles.wrapper, ...styles)}>
            <NextImage
                src={src}
                alt={alt}
                fill
                {...stylex.props(baseStyles.image)}
            />
        </div>
    );
};

export default Image;
