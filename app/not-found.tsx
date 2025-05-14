"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./not-found.stylex";
import Inner from "@/components/Layout/Inner/Inner";

const NotFound = () => {
    const [countdown, setCountdown] = useState(10);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    router.push("/");
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

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
            <div>
                <span>You will be redirected to the homepage in </span>
                <span {...stylex.props(styles.countdown)}>{countdown} </span>
                <span>seconds.</span>
            </div>
        </Inner>
    );
};

export default NotFound;
