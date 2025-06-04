import Link from "@/components/UI/Link/Link";
import { Github } from "lucide-react";
import { baseStyles } from "./GitHubIcon.stylex";

const GitHubIcon = () => {
    return (
        <Link
            href="https://github.com/ruciloss/nextex"
            ariaLabel="Link to GitHub"
            styles={[baseStyles.button]}
        >
            <Github size={20} strokeWidth={2} />
        </Link>
    );
};

export default GitHubIcon;
