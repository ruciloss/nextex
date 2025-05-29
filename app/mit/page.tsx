import type { Metadata } from "next";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";

export const metadata: Metadata = {
    title: "MIT | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const pageMIT = () => {
    return (
        <Inner>
            <div>
                <Heading level={1} variant="h2" spacing={3}>
                    MIT License
                </Heading>
                <Text spacing={2}>
                    Copyright (c) {new Date().getFullYear()} Ruciloss
                </Text>
                <Text spacing={2}>
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the &quot;Software&quot;), to deal in
                    the Software without restriction, including without
                    limitation the rights to use, copy, modify, merge, publish,
                    distribute, sublicense, and/or sell copies of the Software,
                    and to permit persons to whom the Software is furnished to
                    do so, subject to the following conditions:
                </Text>
                <Text>
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY
                    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
                    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
                    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                    THE SOFTWARE.
                </Text>
            </div>
            <Footer />
        </Inner>
    );
};

export default pageMIT;
