import type {FC} from "react";
import Image from "next/image";

import DefaultSkillIcon from "@/assets/icons/skills/svg/Light.svg";
import JavaScriptIcon from "@/assets/icons/skills/svg/JavaScript.svg";
import VueIcon from "@/assets/icons/skills/svg/Vue.svg";
import NuxtJsIcon from "@/assets/icons/skills/svg/Nuxt.svg";
import ReactIcon from "@/assets/icons/skills/svg/React.svg";
import NextJSIcon from "@/assets/icons/skills/svg/Next.svg";
import ReduxIcon from "@/assets/icons/skills/svg/Redux.svg";
import NodejsIcon from "@/assets/icons/skills/svg/NodeJS.svg";
import MongoDBIcon from "@/assets/icons/skills/svg/MongoDB.svg";
import TypeScriptIcon from "@/assets/icons/skills/svg/TypeScript.svg";
import WebpackIcon from "@/assets/icons/skills/svg/Webpack.svg";
import HTMLIcon from "@/assets/icons/skills/svg/HTML.svg";
import CSSIcon from "@/assets/icons/skills/svg/CSS.svg";
import SASSIcon from "@/assets/icons/skills/svg/SASS.svg";
import LessIcon from "@/assets/icons/skills/svg/LESS.svg";
import GitIcon from "@/assets/icons/skills/svg/GIT.svg";
import FigmaIcon from "@/assets/icons/skills/svg/Figma.svg";

const ICONS_MAP = {
    defaultIcon: DefaultSkillIcon,
    javascript: JavaScriptIcon,
    vue: VueIcon,
    nuxt: NuxtJsIcon,
    react: ReactIcon,
    next: NextJSIcon,
    redux: ReduxIcon,
    nodejs: NodejsIcon,
    mongodb: MongoDBIcon,
    typescript: TypeScriptIcon,
    webpack: WebpackIcon,
    html: HTMLIcon,
    css: CSSIcon,
    sass: SASSIcon,
    less: LessIcon,
    git: GitIcon,
    figma: FigmaIcon,
};

export type ImgSvgIconName = keyof typeof ICONS_MAP;

interface Props {
    iconName: ImgSvgIconName;
    alt?: string;
}

export const ImgSvgIcon: FC<Props> = ({iconName, alt = ""}) => {
    const SVG = ICONS_MAP[iconName] || ICONS_MAP.defaultIcon;
    return <Image
        src={SVG}
        alt={alt}
        width={30}
        height={30}
    />
};
