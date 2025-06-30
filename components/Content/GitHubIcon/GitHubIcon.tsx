import Link from "@/components/UI/Link/Link";
import Icon from "@/components/UI/Icon/Icon";
import Tooltip from "@/components/UI/Tooltip/Tooltip";
import { Github } from "lucide-react";

const GitHubIcon = () => {
    return (
        <Link
            href="https://github.com/ruciloss/nextex"
            ariaLabel="Link to GitHub"
        >
            <Icon bg="secondaryHover" size="large">
                <Github />
            </Icon>
            <Tooltip>GitHub</Tooltip>
        </Link>
    );
};

export default GitHubIcon;
