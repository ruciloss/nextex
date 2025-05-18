"use client";

import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Inner from "@/components/Layout/Inner/Inner";

const NotFound = () => {
    return (
        <Inner>
            <div {...stylex.props(styles.heading)}>
                <span role="heading" aria-level={1}>
                    404
                </span>
                <span {...stylex.props(styles.divider)}></span>
                <span role="heading" aria-level={1}>
                    This page could not be found.
                </span>
            </div>
        </Inner>
    );
};

export default NotFound;
