import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./ThemeToggler.stylex";
import Icon from "@/components/UI/Icon/Icon";
import Flex from "@/components/UI/Flex/Flex";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";

const options = [
    { value: "light", label: "Off", icon: Sun },
    { value: "dark", label: "On", icon: Moon },
    {
        value: "system",
        label: "Automatic",
        icon: Monitor,
        description:
            "We'll automatically adjust the display based on your device's system settings.",
    },
];

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleSelect = (value: "system" | "light" | "dark") => {
        setTheme(value);
    };

    const currentOption = options.find((opt) => opt.value === theme);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div {...stylex.props(baseStyles.wrapper)}>
            <span
                role="button"
                tabIndex={0}
                ref={buttonRef}
                aria-label={`Toggle theme menu (current: ${theme})`}
                onClick={() => setOpen((prev) => !prev)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setOpen((prev) => !prev);
                    }
                }}
                {...stylex.props(baseStyles.button)}
            >
                {currentOption?.icon ? (
                    <Icon>
                        <currentOption.icon />
                    </Icon>
                ) : (
                    <Icon>
                        <Monitor />
                    </Icon>
                )}
                <span {...stylex.props(baseStyles.arrow)}>
                    <ChevronDown strokeWidth={4} />
                </span>
            </span>

            {open && (
                <div {...stylex.props(baseStyles.dropdown)} ref={dropdownRef}>
                    <Flex direction="column" gap={3}>
                        <Flex gap={3}>
                            <Icon bg="secondary">
                                <Moon />
                            </Icon>
                            <Flex direction="column" gap={1}>
                                <Heading>Dark mode</Heading>
                                <Text color="secondary">
                                    Adjust the appearance of the website to
                                    reduce glare and give your eyes a break.
                                </Text>
                            </Flex>
                        </Flex>

                        {options.map((opt) => {
                            const isSelected = opt.value === theme;

                            return (
                                <div
                                    key={opt.value}
                                    {...stylex.props(baseStyles.item)}
                                    role="button"
                                    tabIndex={0}
                                    aria-pressed={isSelected}
                                    aria-label={`Dark Mode ${opt.label}${isSelected ? " (selected)" : ""}`}
                                    onClick={() =>
                                        handleSelect(
                                            opt.value as
                                                | "system"
                                                | "light"
                                                | "dark",
                                        )
                                    }
                                    onKeyDown={(e) => {
                                        if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                        ) {
                                            e.preventDefault();
                                            handleSelect(
                                                opt.value as
                                                    | "system"
                                                    | "light"
                                                    | "dark",
                                            );
                                        }
                                    }}
                                >
                                    <Flex
                                        justify="between"
                                        align="center"
                                        gap={2}
                                    >
                                        <div>
                                            <Heading size={7}>
                                                {opt.label}
                                            </Heading>
                                            {opt.description && (
                                                <Text
                                                    size="small"
                                                    color="secondary"
                                                >
                                                    {opt.description}
                                                </Text>
                                            )}
                                        </div>
                                        <input
                                            {...stylex.props(
                                                baseStyles.radio,
                                                isSelected &&
                                                    baseStyles.radioSelected,
                                            )}
                                            type="radio"
                                            aria-checked={
                                                isSelected ? "true" : "false"
                                            }
                                        />
                                    </Flex>
                                </div>
                            );
                        })}
                    </Flex>
                </div>
            )}
        </div>
    );
};

export default ThemeToggler;
