import React from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector.ts";
import styles from "./TheFooter.module.scss";
import {SvgIcon} from "@/utils/svg-icon/SvgIcon.tsx";

export const TheFooter: React.FC = () => {
    const social_medias = useTypedSelector(state => state.author.social);

    return (
        <footer>
            <div className={styles.social_media}>
                {social_medias.map((social_media) => {
                    return (
                        <a
                            href={social_media.href}
                            target="_blank"
                            aria-label={`${social_media.name} link`}
                            key={social_media.name}
                        >
                            <SvgIcon icon_name={social_media.name}/>
                        </a>
                    );
                })}
            </div>

            <div className={styles.copyrighting}>
                <span>©</span>
                <span className={styles.current_year}>{new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};
