import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Feed.stylex";

type FeedProps = {
    children: React.ReactNode;
};

const Feed = ({ children }: FeedProps) => {
    return (
        <div role="main" {...stylex.props(baseStyles.feed)}>
            {children}
        </div>
    );
};

export default Feed;
