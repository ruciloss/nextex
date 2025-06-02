import type { Metadata } from "next";
import Inner from "@/components/Layout/Inner/Inner";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import List from "@/components/UI/List/List";

export const metadata: Metadata = {
    title: "Codex | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const pageCodex = () => {
    return (
        <Inner>
            <div>
                <Heading level={1} size="h2" spacing={3}>
                    Code of Conduct
                </Heading>

                <Heading level={2} size="h5" spacing={2}>
                    Our Pledge
                </Heading>

                <Text spacing={2}>
                    In the interest of fostering an open and welcoming
                    environment, we as contributors and maintainers pledge to
                    make participation in our project and our community a
                    harassment-free experience for everyone, regardless of age,
                    body size, disability, ethnicity, sex characteristics,
                    gender identity and expression, level of experience,
                    education, socio-economic status, nationality, personal
                    appearance, race, religion, or sexual identity and
                    orientation.
                </Text>

                <Heading level={2} size="h5" spacing={2}>
                    Our Standards
                </Heading>

                <Heading level={3} size="h6" spacing={2}>
                    Examples of behavior that contributes to creating a positive
                    environment include:
                </Heading>

                <List spacing={2}>
                    <List.Item>
                        <Text>Using welcoming and inclusive language</Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Being respectful of differing viewpoints and
                            experiences
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>Gracefully accepting constructive criticism</Text>
                    </List.Item>
                    <List.Item>
                        <Text>Focusing on what is best for the community</Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Showing empathy towards other community members
                        </Text>
                    </List.Item>
                </List>

                <Heading level={3} size="h6" spacing={2}>
                    Examples of unacceptable behavior by participants include:
                </Heading>

                <List spacing={2}>
                    <List.Item>
                        <Text>
                            Using sexualized language or imagery and unwelcome
                            sexual attention or advances
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Trolling, insulting/derogatory comments, and
                            personal or political attacks
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>Public or private harassment</Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Publishing other&apos;s private information, such as
                            a physical or electronic address, without explicit
                            permission
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Other conduct which could reasonably be considered
                            inappropriate in a professional setting
                        </Text>
                    </List.Item>
                </List>

                <Heading level={2} size="h5" spacing={2}>
                    Our Responsibilities
                </Heading>

                <Text spacing={2}>
                    Project maintainers are responsible for clarifying the
                    standards of acceptable behavior and are expected to take
                    appropriate and fair corrective action in response to any
                    instances of unacceptable behavior. Project maintainers have
                    the right and responsibility to remove, edit, or reject
                    comments, commits, code, wiki edits, issues, and other
                    contributions that are not aligned to this Code of Conduct,
                    or to ban temporarily or permanently any contributor for
                    other behaviors that they deem inappropriate, threatening,
                    offensive, or harmful.
                </Text>

                <Heading level={2} size="h5" spacing={2}>
                    Scope
                </Heading>

                <Text spacing={2}>
                    This Code of Conduct applies to all spaces managed by the
                    project organization, as well as to all interactions between
                    project contributors and the community, both online and
                    offline.
                </Text>

                <Heading level={2} size="h5" spacing={2}>
                    Enforcement
                </Heading>

                <Text spacing={2}>
                    Instances of abusive, harassing, or otherwise unacceptable
                    behavior may be reported by contacting the maintainers
                    directly via private message. All complaints will be
                    reviewed and investigated and will result in a response that
                    is deemed necessary and appropriate to the circumstances.
                    The project team is obligated to maintain confidentiality
                    with regard to the reporter of an incident. Further details
                    of specific enforcement policies may be posted separately.
                    Project maintainers who do not follow or enforce the Code of
                    Conduct in good faith may face temporary or permanent
                    repercussions as determined by other members of the
                    project&apos;s leadership.
                </Text>

                <Heading level={2} size="h5" spacing={2}>
                    Attribution
                </Heading>

                <Text>
                    This Code of Conduct is adapted from the Contributor
                    Covenant, version 1.4, available here. For answers to common
                    questions about this code of conduct, see faq.
                </Text>
            </div>
        </Inner>
    );
};

export default pageCodex;
