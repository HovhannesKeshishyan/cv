import React from "react";
import {LinkedinIcon} from "@/components/svg-icons/LinkedinIcon.tsx";
import {FacebookIcon} from "@/components/svg-icons/FacebookIcon.tsx";
import {GitHubIcon} from "@/components/svg-icons/GitHubIcon.tsx";
import {TwitterIcon} from "@/components/svg-icons/TwitterIcon.tsx";

const ICONS_MAP = {
    linkedin: LinkedinIcon,
    facebook: FacebookIcon,
    github: GitHubIcon,
    twitter: TwitterIcon
}

export type TSvgIconName = keyof typeof ICONS_MAP;

interface IProps {
    icon_name: TSvgIconName;
}

export const SvgIcon: React.FC<IProps> = ({icon_name}) => {
    const SVG = ICONS_MAP[icon_name];
    return <SVG/>;
}