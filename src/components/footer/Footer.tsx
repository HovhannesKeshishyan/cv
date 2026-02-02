import type {FC} from "react";
import styles from "./Footer.module.scss";
import {SOCIAL_LINKS} from "@/data/scial-links";

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerRow} ${styles.footerRow1}`}>
                <h3>Contacts</h3>
                <ul className={styles.socialMedia}>
                    {SOCIAL_LINKS.map(item => {
                        return (
                            <li key={item.name}>
                                <a href={item.href}
                                   target="_blank"
                                   aria-label={`${item.name} link`}
                                   rel="noreferer, noopener">
                                    <item.icon/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={`${styles.footerRow} ${styles.footerRow2}`}>
                <span>© {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}
