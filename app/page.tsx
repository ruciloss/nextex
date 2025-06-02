import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "./globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Card from "@/components/UI/Card/Card";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
    wrapper: {
        textAlign: "center",
    },
    cardWrapper: {
        alignItems: "center",
        display: "flex",
        gap: spacing.md,
        justifyContent: "center",
        paddingTop: spacing.lg,
    },
});

const Homepage = () => {
    return (
        <>
            <Sidebar aria-label="Shortcuts" role="navigation">
                <Footer />
            </Sidebar>
            <Inner>
                <div {...stylex.props(styles.wrapper)}>
                    <Heading level={1} size="h1" align="center" spacing={2}>
                        NexteX
                    </Heading>
                    <Text color="secondary" align="center">
                        A streamlined starter template leveraging a modern tech
                        stack for rapid development and effortless
                        customization.
                    </Text>
                </div>

                <div {...stylex.props(styles.cardWrapper)}>
                    <Card
                        title="Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    />
                    <Card
                        title="Title"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    />
                </div>
            </Inner>
            <Sidebar role="complementary">dasdadsa</Sidebar>
        </>
    );
};

export default Homepage;
