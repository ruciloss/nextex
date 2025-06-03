import { ReactNode, FormEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Form.stylex";

type Props = {
    children: ReactNode;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    ariaBusy?: boolean;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
    styles?: stylex.StyleXStyles[];
};

const Form = ({
    children,
    ariaLabelledby,
    ariaDescribedby,
    ariaBusy,
    onSubmit,
    styles = [],
}: Props) => {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedby}
            aria-busy={ariaBusy}
            {...stylex.props(baseStyles.form, ...styles)}
        >
            {children}
        </form>
    );
};

export default Form;
