"use client";

import * as stylex from "@stylexjs/stylex";
import { styles } from "./Breadcrumbs.stylex";
import { usePathname } from "next/navigation";
import Link from "@/components/UI/Link/Link";
import Text from "@/components/UI/Text/Text";

const Breadcrumbs = () => {
    const pathname = usePathname();

    if (pathname === "/") return null;

    const pathSegments = pathname
        .split("/")
        .filter((segment) => segment !== "");

    const breadcrumbs = [
        { label: "Home", href: "/" },
        ...pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            return { label: segment, href };
        }),
    ];

    return (
        <div
            role="navigation"
            aria-label="Breadcrumbs"
            {...stylex.props(styles.wrapper)}
        >
            {breadcrumbs.map((breadcrumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                    <div key={index}>
                        <span>
                            {isLast ? (
                                <Text>{breadcrumb.label}</Text>
                            ) : (
                                <Link
                                    href={breadcrumb.href}
                                    ariaLabel={breadcrumb.label}
                                >
                                    {breadcrumb.label}
                                </Link>
                            )}
                        </span>
                        {!isLast && <span>&bull;</span>}
                    </div>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
