"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/Core/SelfXSSWarning";
import Progress from "@/components/UI/Progress/Progress";
import Header from "@/components/Layout/Header/Header";
import Container from "@/components/Layout/Container/Wrapper";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <RootLayout>{children}</RootLayout>
        </ThemeProvider>
    );
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    return (
        <html
            id="nextex"
            lang="en"
            dir="ltr"
            {...stylex.props(
                styles.reset,
                styles.html,
                theme === "light" && styles.htmlLight,
                theme === "dark" && styles.htmlDark,
                theme === "light" && light,
                theme === "dark" && dark,
            )}
        >
            <body {...stylex.props(styles.reset, styles.body)}>
                <Progress />
                <Header />
                <Container>
                    <Sidebar ariaLabel="Shortcuts" role="navigation">
                        d
                    </Sidebar>
                    {children}
                </Container>
                <SelfXSSWarning />
            </body>
        </html>
    );
};

export default Root;
