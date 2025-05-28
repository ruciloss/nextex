import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";
import Heading from "@/components/Content/Heading/Heading";

export const metadata: Metadata = {
    title: "MIT | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
    paragraph: {
        display: "block",
        marginBottom: spacing.xs,
    },
});

const pageMIT = () => {
    return (
        <Inner>
            <div>
                <Breadcrumbs />
                <Heading level={2}>MIT License</Heading>
                <span {...stylex.props(styles.paragraph)}>
                    Copyright (c) {new Date().getFullYear()} Ruciloss
                </span>
                <span {...stylex.props(styles.paragraph)}>
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the &quot;Software&quot;), to deal in
                    the Software without restriction, including without
                    limitation the rights to use, copy, modify, merge, publish,
                    distribute, sublicense, and/or sell copies of the Software,
                    and to permit persons to whom the Software is furnished to
                    do so, subject to the following conditions:
                </span>
                <span {...stylex.props(styles.paragraph)}>
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY
                    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
                    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                    THE SOFTWARE.
                </span>
            </div>
            <Footer />
        </Inner>
    );
};

export default pageMIT;
