import {FC} from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector.ts";
import styles from "./TheFooter.module.scss";
import {SvgIcon} from "@/utils/svg-icon/SvgIcon.tsx";

export const TheFooter: FC = () => {
    const socialMedias = useTypedSelector(state => state.author.social);

    return (
        <footer>
            <div className={styles.socialMedia}>
                {socialMedias.map((socialMedia) => {
                    return (
                        <a
                            href={socialMedia.href}
                            target="_blank"
                            aria-label={`${socialMedia.name} link`}
                            key={socialMedia.name}
                        >
                            <SvgIcon iconName={socialMedia.name}/>
                        </a>
                    );
                })}
            </div>

            <div className={styles.copyrighting}>
                <span>©</span>
                <span>{new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};
