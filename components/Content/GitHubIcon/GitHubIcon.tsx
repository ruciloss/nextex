import Link from "@/components/UI/Link/Link";
import { Github } from "lucide-react";

const GitHubIcon = () => {
    return (
        <Link
            href="https://github.com/ruciloss/nextex"
            ariaLabel="Link to GitHub"
        >
            <Github size={20} strokeWidth={2} />
        </Link>
    );
};

export default GitHubIcon;
