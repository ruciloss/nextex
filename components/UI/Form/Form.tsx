import { ReactNode, FormEvent } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Form.stylex";

type Props = {
    children: ReactNode;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    ariaBusy?: boolean;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
    customStyles?: stylex.StyleXStyles[];
};

const Form = ({
    children,
    ariaLabelledby,
    ariaDescribedby,
    ariaBusy,
    onSubmit,
    customStyles = [],
}: Props) => {
    return (
        <form
            onSubmit={onSubmit}
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedby}
            aria-busy={ariaBusy}
            {...stylex.props(styles.form, ...customStyles)}
        >
            {children}
        </form>
    );
};

export default Form;
