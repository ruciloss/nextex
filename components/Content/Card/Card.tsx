import * as stylex from "@stylexjs/stylex";
import { styles } from "./Card.stylex";
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    image?: string;
};

const Card = ({ title, description, image }: CardProps) => {
    return (
        <div {...stylex.props(styles.wrapper)}>
            {image && (
                <div {...stylex.props(styles.imageWrapper)}>
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </div>
            )}
            <div {...stylex.props(styles.body)}>
                <span {...stylex.props(styles.heading)}>{title}</span>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default Card;
