"use client";

import { baseStyles } from "./Breadcrumbs.stylex";
import { usePathname } from "next/navigation";
import Link from "@/components/UI/Link/Link";
import Text from "@/components/UI/Text/Text";
import Navigation from "@/components/UI/Navigation/Navigation";
import Flex from "@/components/UI/Flex/Flex";

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
        <Navigation ariaLabel="Breadcrumbs" styles={[baseStyles.breadcrumbs]}>
            <Flex gap={1}>
                {breadcrumbs.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <div key={index}>
                            {isLast ? (
                                <Text size="small">{breadcrumb.label}</Text>
                            ) : (
                                <Link
                                    href={breadcrumb.href}
                                    ariaLabel={breadcrumb.label}
                                >
                                    <Text size="small">{breadcrumb.label}</Text>
                                </Link>
                            )}
                            {!isLast && <Text size="small">&bull;</Text>}
                        </div>
                    );
                })}
            </Flex>
        </Navigation>
    );
};

export default Breadcrumbs;
