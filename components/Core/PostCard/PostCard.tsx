import Button from "@/components/UI/Button/Button";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Image from "@/components/UI/Image/Image";
import Card from "@/components/UI/Card/Card";
import Icon from "@/components/UI/Icon/Icon";
import Flex from "@/components/UI/Flex/Flex";
import Divider from "@/components/UI/Divider/Divider";
import { Ellipsis, Forward, MessageCircle, ThumbsUp, X } from "lucide-react";

const PostCard = () => {
    return (
        <Card>
            <Flex justify="between" align="center">
                <Heading>Text</Heading>
                <Flex gap={2}>
                    <Button>
                        <Icon bg="transparentHover" color="secondary">
                            <Ellipsis />
                        </Icon>
                    </Button>
                    <Button>
                        <Icon bg="transparentHover" color="secondary">
                            <X />
                        </Icon>
                    </Button>
                </Flex>
            </Flex>
            <Image src="https://picsum.photos/id/237/800/600" alt="Image" />
            <Text>Description of the image</Text>
            <Divider />
            <Flex justify="around">
                <Flex gap={8} justify="evenly">
                    <Button>
                        <Flex align="center" gap={2}>
                            <Icon>
                                <ThumbsUp />
                            </Icon>
                            Like
                        </Flex>
                    </Button>
                    <Button>
                        <Flex align="center" gap={2}>
                            <Icon>
                                <MessageCircle />
                            </Icon>
                            Comment
                        </Flex>
                    </Button>
                    <Button>
                        <Flex align="center" gap={2}>
                            <Icon>
                                <Forward />
                            </Icon>
                            Share
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
};

export default PostCard;
