import {FC} from "react";

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

import type {SocialMedia} from "@/types";

import styles from "./Footer.module.scss";

const socialMedia: SocialMedia[] = [
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
        icon: FaTwitter
    },
];

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialMedia}>
                {socialMedia.map((sm) => {
                    return (
                        <a
                            href={sm.href}
                            target="_blank"
                            aria-label={`${sm.name} link`}
                            key={sm.name}
                        >
                            <sm.icon/>
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
