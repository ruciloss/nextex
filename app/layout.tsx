"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/Core/SelfXSSWarning";
import Header from "@/components/Layout/Header/Header";
import Container from "@/components/Layout/Container/Wrapper";
import Footer from "@/components/Layout/Footer/Footer";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Sidebar2 from "@/components/Layout/Sidebar2/Sidebar2";

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
                <Header />
                <Container>
                    <Sidebar ariaLabel="Shortcuts" role="navigation">
                        <Footer />
                    </Sidebar>
                    {children}
                    <Sidebar2 ariaLabel="Sidebar" role="complementary">
                        dasdadsa
                    </Sidebar2>
                </Container>
                <SelfXSSWarning />
            </body>
        </html>
    );
};

export default Root;
