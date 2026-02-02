import type {ImgSvgIconName} from "@/utils/img-svg-icon/ImgSvgIcon";

export interface Skill {
    name: string;
    level: string;
    icon: ImgSvgIconName;
    officialPageUrl: string;
}

export const SKILLS_LIST: Skill[] = [
    {name: "JavaScript", level: "", icon: "javascript", officialPageUrl: "https://tc39.es/ecma262"},
    {name: "TypeScript", level: "", icon: "typescript", officialPageUrl: "https://www.typescriptlang.org"},
    {name: "Vue", level: "", icon: "vue", officialPageUrl: "https://vuejs.org"},
    {name: "Nuxt", level: "", icon: "nuxt", officialPageUrl: "https://nuxt.com"},
    {name: "React", level: "", icon: "react", officialPageUrl: "https://react.dev"},
    {name: "Next", level: "", icon: "next", officialPageUrl: "https://nextjs.org"},
    {name: "Redux", level: "", icon: "redux", officialPageUrl: "https://redux.js.org"},
    {name: "Node.js", level: "", icon: "nodejs", officialPageUrl: "https://nodejs.org/en"},
    {name: "MongoDB", level: "", icon: "mongodb", officialPageUrl: "https://www.mongodb.com"},
    {name: "Webpack", level: "", icon: "webpack", officialPageUrl: "https://webpack.js.org"},
    {name: "HTML", level: "", icon: "html", officialPageUrl: "https://html.spec.whatwg.org/"},
    {name: "CSS", level: "", icon: "css", officialPageUrl: "https://www.w3.org/TR/css"},
    {name: "SASS/SCSS", level: "", icon: "sass", officialPageUrl: "https://sass-lang.com"},
    {name: "LESS", level: "", icon: "less", officialPageUrl: "https://lesscss.org"},
    {name: "GIT", level: "", icon: "git", officialPageUrl: "https://github.com"},
    {name: "Figma", level: "", icon: "figma", officialPageUrl: "https://www.figma.com"},
];
