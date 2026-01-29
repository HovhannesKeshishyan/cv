import type {FC} from "react";

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

import type {SocialMedia} from "@/types";

import styles from "./Footer.module.scss";

const socialLinks: SocialMedia[] = [
    {
        name: "linkedin",
        href: "https://www.linkedin.com/in/hovhannes-keshishyan",
        icon: FaLinkedin
    },
    {
        name: "github",
        href: "https://github.com/HovhannesKeshishyan",
        icon: FaGithub
    },
    {
        name: "facebook",
        href: "https://www.facebook.com/HovoKeshishyan",
        icon: FaFacebook
    },
    {
        name: "twitter",
        href: "https://twitter.com/hovo1991",
        icon: FaXTwitter
    },
];

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerRow} ${styles.footerRow1}`}>
                <h3>Contacts</h3>
                <ul className={styles.socialMedia}>
                    {socialLinks.map(item => {
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
