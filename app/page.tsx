import type { Metadata } from "next";
import Feed from "@/components/Layout/Feed/Feed";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import List from "@/components/UI/List/List";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import Progress from "@/components/UI/Progress/Progress";
import Flex from "@/components/UI/Flex/Flex";
import PostCard from "@/components/Core/PostCard/PostCard";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const Homepage = () => {
    return (
        <Feed>
            <div>
                <Heading level={1}>NexteX</Heading>
                <Text>
                    A streamlined starter template leveraging a modern tech
                    stack for rapid development and effortless customization.
                </Text>
            </div>

            <div>
                <Heading level={2} size="small">
                    Input
                </Heading>
                <Input type="text" name="group1" placeholder="option1" />

                <Heading level={2} size="large">
                    Button
                </Heading>
                <Button>Button</Button>

                <Heading level={2}>Progress (Loading)</Heading>
                <Button>
                    <Flex as="span" gap={2}>
                        <Progress />
                        Button
                    </Flex>
                </Button>

                <PostCard />

                <Dropdown>
                    <Dropdown.Button>
                        <Button
                            ariaHaspopup="dialog"
                            ariaExpanded={true}
                            aria-controls="dropdown-modal"
                        >
                            DropdownButton
                        </Button>
                    </Dropdown.Button>

                    <Dropdown.Modal id="dropdown-modal" ariaLabel="Dropdown">
                        <List ariaLabel="List" as="ul" gap={2}>
                            <List.Item>
                                <Text>ListItem1</Text>
                            </List.Item>
                            <List.Item>
                                <Text>ListItem3</Text>
                            </List.Item>
                        </List>
                    </Dropdown.Modal>
                </Dropdown>
            </div>
        </Feed>
    );
};

export default Homepage;
