import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Feed.stylex";

type FeedProps = {
    children: React.ReactNode;
    as?: "div" | "main";
};

const Feed = ({ children, as = "div" }: FeedProps) => {
    const Component = as;

    return (
        <Component role="main" {...stylex.props(baseStyles.feed)}>
            {children}
        </Component>
    );
};

export default Feed;
