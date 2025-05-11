import * as stylex from "@stylexjs/stylex";
import { styles } from "./SocialIcon.stylex";
import { Github } from "lucide-react";

const SocialIcon = () => {
    return (
        <a
            href="https://github.com/ruciloss/nextex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub"
            role="link"
            {...stylex.props(styles.button)}
        >
            <Github
                width={18}
                height={18}
                strokeWidth={2}
                role="img"
                aria-label="automatic theme icon"
            />
        </a>
    );
};

export default SocialIcon;
