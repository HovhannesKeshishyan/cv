import type {FC} from "react";
import Image from "next/image";

import DefaultSkillIcon from "@/assets/icons/skills/svg/Light.svg";

// Languages & Web
import JavaScriptIcon from "@/assets/icons/skills/svg/JavaScript.svg";
import TypeScriptIcon from "@/assets/icons/skills/svg/TypeScript.svg";
import HTMLIcon from "@/assets/icons/skills/svg/HTML.svg";
import CSSIcon from "@/assets/icons/skills/svg/CSS.svg";
import SASSIcon from "@/assets/icons/skills/svg/SASS.svg";
import LessIcon from "@/assets/icons/skills/svg/LESS.svg";

// Frameworks & Libraries
import VueIcon from "@/assets/icons/skills/svg/Vue.svg";
import NuxtJsIcon from "@/assets/icons/skills/svg/Nuxt.svg";
import PiniaIcon from "@/assets/icons/skills/svg/Pinia.svg";
import ReactIcon from "@/assets/icons/skills/svg/React.svg";
import NextJSIcon from "@/assets/icons/skills/svg/Next.svg";
import ReduxIcon from "@/assets/icons/skills/svg/Redux.svg";
import AngularIcon from "@/assets/icons/skills/svg/Angular.svg";

// Frontend Engineering
import ArchitectureIcon from "@/assets/icons/skills/svg/Architecture.svg";
import DesignSystemsIcon from "@/assets/icons/skills/svg/DesignSystems.svg";
import StateManagementIcon from "@/assets/icons/skills/svg/StateManagement.svg";
import PerformanceIcon from "@/assets/icons/skills/svg/Performance.svg";
import AccessibilityIcon from "@/assets/icons/skills/svg/WCAG.svg";
import ResponsiveDesignIcon from "@/assets/icons/skills/svg/ResponsiveDesign.svg";
import RestAPIIcon from "@/assets/icons/skills/svg/RestAPI.svg";
import CrossBrowserIcon from "@/assets/icons/skills/svg/CrossBrowser.svg";

// Backend & Data
import NodejsIcon from "@/assets/icons/skills/svg/NodeJS.svg";
import ExpressIcon from "@/assets/icons/skills/svg/Express.svg";
import PythonIcon from "@/assets/icons/skills/svg/Python.svg";
import FastAPIIcon from "@/assets/icons/skills/svg/FastAPI.svg";
import MongoDBIcon from "@/assets/icons/skills/svg/MongoDB.svg";
import MySQLIcon from "@/assets/icons/skills/svg/MySQL.svg";

// Tools & Platforms
import AdobeIcon from "@/assets/icons/skills/svg/Adobe.svg";
import GitIcon from "@/assets/icons/skills/svg/GIT.svg";
import GitLabIcon from "@/assets/icons/skills/svg/Gitlab.svg";
import BitbucketIcon from "@/assets/icons/skills/svg/Bitbucket.svg";
import WebpackIcon from "@/assets/icons/skills/svg/Webpack.svg";
import ViteIcon from "@/assets/icons/skills/svg/Vite.svg";
import FigmaIcon from "@/assets/icons/skills/svg/Figma.svg";

// Testing & CI
import PlaywrightIcon from "@/assets/icons/skills/svg/Playwright.svg";
import SeleniumIcon from "@/assets/icons/skills/svg/Selenium.svg";

// AI-Assisted Development
import ClaudeCodeIcon from "@/assets/icons/skills/svg/ClaudeCode.svg";
import ClaudeAIIcon from "@/assets/icons/skills/svg/ClaudeAI.svg";

const ICONS_MAP = {
    defaultIcon: DefaultSkillIcon,

    // Languages & Web
    javascript: JavaScriptIcon,
    typescript: TypeScriptIcon,
    html: HTMLIcon,
    css: CSSIcon,
    sass: SASSIcon,
    less: LessIcon,

    // Frameworks & Libraries
    vue: VueIcon,
    nuxt: NuxtJsIcon,
    pinia: PiniaIcon,
    react: ReactIcon,
    next: NextJSIcon,
    redux: ReduxIcon,
    angular: AngularIcon,

    // Frontend Engineering
    frontendArchitecture: ArchitectureIcon,
    componentArchitecture: ArchitectureIcon,
    designSystems: DesignSystemsIcon,
    stateManagement: StateManagementIcon,
    performance: PerformanceIcon,
    accessibility: AccessibilityIcon,
    responsiveDesign: ResponsiveDesignIcon,
    restApi: RestAPIIcon,
    crossBrowser: CrossBrowserIcon,

    // Backend & Data
    nodejs: NodejsIcon,
    express: ExpressIcon,
    python: PythonIcon,
    fastapi: FastAPIIcon,
    mongodb: MongoDBIcon,
    mysql: MySQLIcon,

    // Tools & Platforms
    aem: AdobeIcon,
    dynamicMedia: AdobeIcon,
    git: GitIcon,
    gitlab: GitLabIcon,
    bitbucket: BitbucketIcon,
    webpack: WebpackIcon,
    vite: ViteIcon,
    figma: FigmaIcon,

    // Testing & CI
    playwright: PlaywrightIcon,
    selenium: SeleniumIcon,
    restApiTesting: RestAPIIcon,
    gitlabCi: GitLabIcon,

    // AI-Assisted Development
    claudeCode: ClaudeCodeIcon,
    claudeApi: ClaudeAIIcon,
    mcp: ClaudeAIIcon,
    agentSkills: ClaudeAIIcon,
    subagents: ClaudeAIIcon,
    rag: ClaudeAIIcon,
};

export type ImgSvgIconName = keyof typeof ICONS_MAP;

// Single-color icons drawn in black (fill/stroke="black").
// They are inverted to white in dark theme (see .theme-adaptive-icon in globals.scss).
const THEME_ADAPTIVE_ICONS = new Set<ImgSvgIconName>([
    "express",
    "accessibility",
    "frontendArchitecture",
    "componentArchitecture",
    "designSystems",
    "responsiveDesign",
    "restApi",
    "restApiTesting",
    "stateManagement",
]);

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
        className={THEME_ADAPTIVE_ICONS.has(iconName) ? "theme-adaptive-icon" : undefined}
    />
};
