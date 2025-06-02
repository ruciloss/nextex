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
                    <Heading level={1}>NexteX</Heading>
                    <Text>
                        A streamlined starter template leveraging a modern tech
                        stack for rapid development and effortless
                        customization.
                    </Text>
                </div>

                <div {...stylex.props(styles.cardWrapper)}>
                    <Card>
                        <Card.Body>aaa</Card.Body>
                    </Card>
                </div>
            </Inner>
            <Sidebar role="complementary">dasdadsa</Sidebar>
        </>
    );
};

export default Homepage;
