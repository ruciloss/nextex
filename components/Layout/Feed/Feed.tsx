import * as stylex from "@stylexjs/stylex";
import { styles } from "./Feed.stylex";

type FeedProps = {
    children: React.ReactNode;
};

const Feed = ({ children }: FeedProps) => {
    return (
        <div role="main" {...stylex.props(styles.wrapper)}>
            {children}
        </div>
    );
};

export default Feed;
