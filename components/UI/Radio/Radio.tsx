import { ChangeEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Radio.stylex";

type RadioProps = {
    name?: string;
    value?: string | number | readonly string[];
    placeholder?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    styles?: stylex.StyleXStyles[];
};
const Radio = ({
    name,
    value,
    placeholder,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    disabled,
    required,
    onChange,
    onFocus,
    onBlur,
    styles = [],
}: RadioProps) => {
    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-describedby={ariaDescribedby}
                aria-disabled={disabled}
                disabled={disabled}
                required={required}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...stylex.props(baseStyles.radio, ...styles)}
            />
        </label>
    );
};

export default Radio;
