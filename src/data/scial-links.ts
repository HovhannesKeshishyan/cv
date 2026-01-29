import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

import type {SocialMedia} from "@/types";

export const SOCIAL_LINKS: SocialMedia[] = [
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
