"use client";

import "./app.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./layout.stylex";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { light, dark } from "./themes";
import SelfXSSWarning from "@/components/Core/SelfXSSWarning";
import RouteChangeProgress from "@/components/Core/RouteChangeProgress/RouteChangeProgress";
import Header from "@/components/Layout/Header/Header";
import Container from "@/components/Layout/Container/Container";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import ReloadData from "@/components/Core/ReloadData/ReloadData";

const App = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Layout>{children}</Layout>
        </ThemeProvider>
    );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    return (
        <html
            id="nextex"
            lang="en"
            dir="ltr"
            {...stylex.props(
                styles.html,
                theme === "light" && styles.htmlLight,
                theme === "dark" && styles.htmlDark,
                theme === "light" && light,
                theme === "dark" && dark,
            )}
        >
            <body {...stylex.props(styles.body)}>
                <RouteChangeProgress />
                <ReloadData />
                <Header />
                <Container>
                    <Sidebar role="navigation" ariaLabel="Shortcuts" />
                    {children}
                    <Sidebar
                        role="complementary"
                        ariaLabel="Shortcuts"
                        align="right"
                    />
                </Container>
                <SelfXSSWarning />
            </body>
        </html>
    );
};

export default App;
