import type { Metadata } from "next";
import Feed from "@/components/Layout/Feed/Feed";
import Card from "@/components/UI/Card/Card";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Button from "@/components/UI/Button/Button";
import Link from "@/components/UI/Link/Link";
import Input from "@/components/UI/Input/Input";
import List from "@/components/UI/List/List";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import Progress from "@/components/UI/Progress/Progress";
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import Image from "@/components/UI/Image/Image";
import Flex from "@/components/UI/Flex/Flex";
import Icon from "@/components/UI/Icon/Icon";
import Divider from "@/components/UI/Divider/Divider";
import Tab from "@/components/UI/Tab/Tab";
import { ChevronRight } from "lucide-react";

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
                <Heading level={2}>Input</Heading>
                <Input type="text" name="group1" placeholder="option1" />
                <Divider />

                <Heading level={2}>Button</Heading>
                <Button>Button</Button>
                <Divider />

                <Heading level={2}>Progress (Loading)</Heading>
                <Button>
                    <Flex as="span" gap={2}>
                        <Progress />
                        <Progress variant="bar" />
                        Button
                    </Flex>
                </Button>

                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Skeleton</Heading>
                <div>
                    <Skeleton />
                </div>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Dropdown</Heading>
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
                                <Link href="/" ariaLabel="Test">
                                    <Tab>
                                        <Text>ListItem2</Text>
                                    </Tab>
                                </Link>
                            </List.Item>
                            <List.Item>
                                <Text>ListItem3</Text>
                            </List.Item>
                        </List>
                    </Dropdown.Modal>
                </Dropdown>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Card</Heading>
                <Card>
                    <Flex justify="between">
                        <Heading>Text</Heading>
                        <Flex gap={2}>
                            <Button>
                                <Icon>
                                    <ChevronRight />
                                </Icon>
                            </Button>
                            <Button>
                                <Icon>
                                    <ChevronRight />
                                </Icon>
                            </Button>
                        </Flex>
                    </Flex>
                    <Image
                        src="https://picsum.photos/id/237/800/600"
                        alt="Image"
                    />
                    sadsada
                    <Divider />
                    <Flex justify="around">
                        <Flex gap={10} justify="evenly">
                            <Button>Button</Button>
                            <Button>Button</Button>
                            <Button>Button</Button>
                        </Flex>
                    </Flex>
                </Card>
            </div>
        </Feed>
    );
};

export default Homepage;
