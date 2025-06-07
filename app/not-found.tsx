"use client";

import Inner from "@/components/Layout/Feed/Feed";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Link from "@/components/UI/Link/Link";
import { FileLock2Icon } from "lucide-react";
import Icon from "@/components/UI/Icon/Icon";
import Flex from "@/components/UI/Flex/Flex";

const NotFound = () => {
    return (
        <Inner>
            <Flex gap={5} column={true}>
                <Flex justify="center">
                    <Icon color="secondary">
                        <FileLock2Icon size={56} strokeWidth={1.5} />
                    </Icon>
                </Flex>

                <Heading level={1} size={6} align="center">
                    This content isn&apos;t available right now.
                </Heading>

                <Text>
                    When this happens, it&apos;s usually because the content is
                    no longer available, the link is broken, or access has been
                    restricted by the owner.
                </Text>

                <Link href="/" ariaLabel="Link to Homepage">
                    Go to Homepage
                </Link>
            </Flex>
        </Inner>
    );
};

export default NotFound;
