import { ChangeEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Input.stylex";

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
    | "checkbox"
    | "radio"
    | "file";

type Props = {
    type: InputType;
    id?: string;
    name?: string;
    value?: string | number | readonly string[];
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    ariaInvalid?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    customStyles?: stylex.StyleXStyles[];
};

const Input = ({
    type,
    id,
    name,
    value,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    ariaInvalid,
    disabled,
    required,
    onChange,
    customStyles = [],
}: Props) => {
    return (
        <label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                aria-label={ariaLabel}
                aria-labelledby={ariaLabelledby}
                aria-describedby={ariaDescribedby}
                aria-invalid={ariaInvalid}
                aria-required={required}
                aria-disabled={disabled}
                disabled={disabled}
                required={required}
                onChange={onChange}
                {...stylex.props(styles.input, ...customStyles)}
            />
        </label>
    );
};

export default Input;
