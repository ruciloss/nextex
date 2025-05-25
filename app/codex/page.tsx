import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../globalTokens.stylex";
import Inner from "@/components/Layout/Inner/Inner";
import Footer from "@/components/Layout/Footer/Footer";
import Breadcrumbs from "@/components/Core/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
    title: "Codex | NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const styles = stylex.create({
    heading: {
        color: `rgba(${colors.blackWhiteR}, ${colors.blackWhiteG}, ${colors.blackWhiteB}, 1)`,
        display: "block",
        marginBottom: spacing.sm,
    },
    h1: {
        fontSize: text.h2,
        fontWeight: 700,
    },
    h2: {
        fontSize: text.h5,
        fontWeight: 700,
    },
    paragraph: {
        display: "block",
        marginBottom: spacing.xs,
    },
});

const pageCodex = () => {
    return (
        <Inner>
            <div>
                <Breadcrumbs />
                <span
                    role="heading"
                    aria-level={1}
                    {...stylex.props(styles.heading, styles.h1)}
                >
                    Code of Conduct
                </span>
                <span
                    role="heading"
                    aria-level={2}
                    {...stylex.props(styles.heading, styles.h2)}
                >
                    Our Pledge
                </span>
                <span {...stylex.props(styles.paragraph)}>
                    In the interest of fostering an open and welcoming
                    environment, we as contributors and maintainers pledge to
                    make participation in our project and our community a
                    harassment-free experience for everyone, regardless of age,
                    body size, disability, ethnicity, sex characteristics,
                    gender identity and expression, level of experience,
                    education, socio-economic status, nationality, personal
                    appearance, race, religion, or sexual identity and
                    orientation.
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

export default pageCodex;
