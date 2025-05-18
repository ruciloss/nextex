import * as stylex from "@stylexjs/stylex";
import { styles } from "./GitHubIcon.stylex";
import { Github } from "lucide-react";

const GitHubIcon = () => {
    return (
        <a
            href="https://github.com/ruciloss/nextex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub"
            role="link"
            tabIndex={0}
            {...stylex.props(styles.button)}
        >
            <Github
                width={18}
                height={18}
                strokeWidth={2}
                role="img"
                aria-label="GitHub Icon"
            />
        </a>
    );
};

export default GitHubIcon;
