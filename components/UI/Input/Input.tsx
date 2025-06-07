import { ChangeEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Input.stylex";

type InputType =
    | "text"
    | "password"
    | "email"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "time"
    | "file";

type InputProps = {
    type: InputType;
    id?: string;
    name?: string;
    value?: string | number | readonly string[];
    placeholder?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    ariaInvalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    styles?: stylex.StyleXStyles[];
};
const Input = ({
    type,
    id,
    name,
    value,
    placeholder,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    ariaInvalid,
    disabled,
    required,
    onChange,
    onFocus,
    onBlur,
    styles = [],
}: InputProps) => {
    return (
        <label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-describedby={ariaDescribedby}
                aria-invalid={ariaInvalid}
                aria-required={required}
                aria-disabled={disabled}
                disabled={disabled}
                required={required}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...stylex.props(baseStyles.input, ...styles)}
            />
        </label>
    );
};

export default Input;
