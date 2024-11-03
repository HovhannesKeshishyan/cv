import {FC} from "react";
import {LinkedinIcon} from "@/utils/svg-icons/social/LinkedinIcon.tsx";
import {FacebookIcon} from "@/utils/svg-icons/social/FacebookIcon.tsx";
import {GitHubIcon} from "@/utils/svg-icons/social/GitHubIcon.tsx";
import {TwitterIcon} from "@/utils/svg-icons/social/TwitterIcon.tsx";

import {ToggleArrowIcon} from "@/utils/svg-icons/utils/ToggleArrow.tsx";

const SOCIAL_ICONS = {
    linkedin: LinkedinIcon,
    facebook: FacebookIcon,
    github: GitHubIcon,
    twitter: TwitterIcon
}

const UTILS_ICONS = {
    toggleArrow: ToggleArrowIcon
}

const ICONS_MAP = {
    ...SOCIAL_ICONS,
    ...UTILS_ICONS
}

export type TSvgIconName = keyof typeof ICONS_MAP;

interface IProps {
    iconName: TSvgIconName;
}

export const SvgIcon: FC<IProps> = ({iconName}) => {
    const SVG = ICONS_MAP[iconName];
    return <SVG/>;
}