"use client";

import { useState } from "react";
import NextImage from "next/image";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Image.stylex";
import Skeleton from "@/components/UI/Skeleton/Skeleton";

type ImageProps = {
    src: string;
    alt: string;
    styles?: stylex.StyleXStyles[];
};

const Image = ({ src, alt, styles = [] }: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div {...stylex.props(baseStyles.wrapper, ...styles)}>
            {isLoading && <Skeleton />}
            <NextImage
                src={src}
                alt={alt}
                fill
                {...stylex.props(baseStyles.image)}
                onLoadingComplete={() => setIsLoading(false)}
            />
        </div>
    );
};

export default Image;
