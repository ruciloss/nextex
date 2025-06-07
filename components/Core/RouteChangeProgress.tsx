"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import Progress from "../UI/Progress/Progress";

const RouteChangeProgress = () => {
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

    return loading || isPending ? <Progress /> : null;
};

export default RouteChangeProgress;
