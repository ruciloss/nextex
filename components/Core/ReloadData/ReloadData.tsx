"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./ReloadData.stylex";
import Progress from "../../UI/Progress/Progress";

const ReloadData = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [isPending] = useTransition();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return loading || isPending ? (
        <div {...stylex.props(baseStyles.preload)}>
            <Progress variant="preload" />
        </div>
    ) : null;
};

export default ReloadData;
