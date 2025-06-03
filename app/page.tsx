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
import Navigation from "@/components/UI/Navigation/Navigation";
import Progressbar from "@/components/UI/Progressbar/Progressbar";
import Skeleton from "@/components/UI/Skeleton/Skeleton";
import Tooltip from "@/components/UI/Tooltip/Tooltip";
import Dialog from "@/components/UI/Dialog/Dialog";
import Form from "@/components/UI/Form/Form";
import Image from "@/components/UI/Image/Image";

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
                <Input type="text" placeholder="Enter text" />
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Button</Heading>
                <Button>Button</Button>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Link</Heading>
                <Link href="/" ariaLabel="Link">
                    Link
                </Link>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Navigation</Heading>
                <Navigation ariaLabel="Navigation">Navigation</Navigation>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Dialog</Heading>
                <Dialog>Dialog</Dialog>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Form</Heading>
                <Form>Form</Form>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Progress bar</Heading>
                <Progressbar />
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Image</Heading>
                <Image src="https://picsum.photos/id/237/800/600" alt="Image" />
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Skeleton</Heading>
                <div>
                    <Skeleton />
                </div>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Tooltip</Heading>
                <Tooltip>Tooltip</Tooltip>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>List</Heading>
                <List ariaLabel="List">
                    <List.Item>
                        <Text>ListItem1</Text>
                    </List.Item>
                    <List.Item>
                        <Text>ListItem2</Text>
                    </List.Item>
                    <List.Item>
                        <Text>ListItem3</Text>
                    </List.Item>
                </List>
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

                    <Dropdown.Modal
                        id="dropdown-modal"
                        ariaLabel="Dropdown"
                        role="menu"
                    >
                        <Dropdown.Item>DropdownItem1</Dropdown.Item>
                        <Dropdown.Item>DropdownItem2</Dropdown.Item>
                        <Dropdown.Item>DropdownItem3</Dropdown.Item>
                    </Dropdown.Modal>
                </Dropdown>
                <hr style={{ marginTop: "20px", marginBottom: "20px" }} />

                <Heading level={2}>Card</Heading>
                <Card>
                    <Card.Header>CardHeader</Card.Header>
                    <Card.Body>CardBody</Card.Body>
                    <Card.Footer>CardFooter</Card.Footer>
                </Card>
            </div>
        </Feed>
    );
};

export default Homepage;
