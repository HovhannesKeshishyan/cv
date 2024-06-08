import React from "react";
import {LinkedinIcon} from "@/components/svg-icons/social/LinkedinIcon.tsx";
import {FacebookIcon} from "@/components/svg-icons/social/FacebookIcon.tsx";
import {GitHubIcon} from "@/components/svg-icons/social/GitHubIcon.tsx";
import {TwitterIcon} from "@/components/svg-icons/social/TwitterIcon.tsx";

import {ToggleArrowIcon} from "@/components/svg-icons/utils/ToggleArrow.tsx";

const SOCIAL_ICONS = {
    linkedin: LinkedinIcon,
    facebook: FacebookIcon,
    github: GitHubIcon,
    twitter: TwitterIcon
}

const UTILS_ICONS = {
    toggle_arrow: ToggleArrowIcon
}

const ICONS_MAP = {
    ...SOCIAL_ICONS,
    ...UTILS_ICONS
}

export type TSvgIconName = keyof typeof ICONS_MAP;

interface IProps {
    icon_name: TSvgIconName;
}

export const SvgIcon: React.FC<IProps> = ({icon_name}) => {
    const SVG = ICONS_MAP[icon_name];
    return <SVG/>;
}