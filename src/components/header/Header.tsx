import {FC} from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.imageContainer}>
                <Image
                    src="/hk.webp"
                    alt="Hovhannes Keshishyan Profile Image"
                    priority={true}
                    width={300}
                    height={300}
                    sizes="(max-width: 720px) 225px, 300px"
                />
            </div>
            <div>
                <div>
                    <h1>Hovhannes Keshishyan</h1>
                </div>
                <div className={styles.currentJobBlock}>
                    <h2>JavaScript Developer</h2>
                </div>
            </div>
        </header>
    );
};
