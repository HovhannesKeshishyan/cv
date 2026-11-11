import type {ImgSvgIconName} from "@/utils/img-svg-icon/ImgSvgIcon";

export interface Skill {
    name: string;
    level: string;
    icon: ImgSvgIconName;
    officialPageUrl: `https://${string}`;
    hide?: boolean;
}

export const SKILLS_LIST: Skill[] = [
    // Languages & Web
    {name: "JavaScript", level: "", icon: "javascript", officialPageUrl: "https://tc39.es/ecma262"},
    {name: "TypeScript", level: "", icon: "typescript", officialPageUrl: "https://www.typescriptlang.org"},
    {name: "HTML", level: "", icon: "html", officialPageUrl: "https://html.spec.whatwg.org/"},
    {name: "CSS", level: "", icon: "css", officialPageUrl: "https://www.w3.org/TR/css"},
    {name: "SASS/SCSS", level: "", icon: "sass", officialPageUrl: "https://sass-lang.com"},
    {name: "LESS", level: "", icon: "less", officialPageUrl: "https://lesscss.org"},

    // Frameworks & Libraries
    {name: "Vue", level: "", icon: "vue", officialPageUrl: "https://vuejs.org"},
    {name: "Nuxt", level: "", icon: "nuxt", officialPageUrl: "https://nuxt.com"},
    {name: "Pinia", level: "", icon: "pinia", officialPageUrl: "https://pinia.vuejs.org"},
    {name: "Vuex", level: "", icon: "vue", officialPageUrl: "https://vuex.vuejs.org"},
    {name: "Vue Router", level: "", icon: "vue", officialPageUrl: "https://router.vuejs.org"},
    {name: "React", level: "", icon: "react", officialPageUrl: "https://react.dev"},
    {name: "Next", level: "", icon: "next", officialPageUrl: "https://nextjs.org"},
    {name: "Redux", level: "", icon: "redux", officialPageUrl: "https://redux.js.org"},
    {name: "Angular", level: "", icon: "angular", officialPageUrl: "https://angular.dev"},

    // Frontend Engineering
    {
        name: "Frontend Architecture",
        level: "",
        icon: "frontendArchitecture",
        officialPageUrl: "https://www.patterns.dev"
    },
    {
        name: "Component Architecture",
        level: "",
        icon: "componentArchitecture",
        officialPageUrl: "https://www.componentdriven.org"
    },
    {name: "Design Systems", level: "", icon: "designSystems", officialPageUrl: "https://www.designsystems.com"},
    {
        name: "State Management",
        level: "",
        icon: "stateManagement",
        officialPageUrl: "https://react.dev/learn/managing-state"
    },
    {name: "Performance Optimization", level: "", icon: "performance", officialPageUrl: "https://web.dev/performance"},
    {
        name: "Web Accessibility (WCAG 2.1, ARIA)",
        level: "",
        icon: "accessibility",
        officialPageUrl: "https://www.w3.org/WAI/standards-guidelines/wcag/"
    },
    {
        name: "Responsive Design",
        level: "",
        icon: "responsiveDesign",
        officialPageUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"
    },
    {
        name: "REST API Integration",
        level: "",
        icon: "restApi",
        officialPageUrl: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
    },
    {
        name: "Cross-Browser Compatibility",
        level: "",
        icon: "crossBrowser",
        officialPageUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction",
        hide: true
    },

    // Backend & Data
    {name: "Node.js", level: "", icon: "nodejs", officialPageUrl: "https://nodejs.org/en"},
    {name: "Express", level: "", icon: "express", officialPageUrl: "https://expressjs.com"},
    {name: "Python", level: "", icon: "python", officialPageUrl: "https://www.python.org"},
    {name: "FastAPI", level: "", icon: "fastapi", officialPageUrl: "https://fastapi.tiangolo.com"},
    {name: "MongoDB", level: "", icon: "mongodb", officialPageUrl: "https://www.mongodb.com"},
    {name: "MySQL", level: "", icon: "mysql", officialPageUrl: "https://www.mysql.com"},

    // Tools & Platforms
    {
        name: "Adobe Experience Manager (AEM)",
        level: "",
        icon: "aem",
        officialPageUrl: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html"
    },
    {
        name: "Dynamic Media (Scene7)",
        level: "",
        icon: "dynamicMedia",
        officialPageUrl: "https://business.adobe.com/products/experience-manager/assets/dynamic-media.html"
    },
    {name: "GIT", level: "", icon: "git", officialPageUrl: "https://git-scm.com"},
    {name: "GitLab", level: "", icon: "gitlab", officialPageUrl: "https://gitlab.com"},
    {name: "Bitbucket", level: "", icon: "bitbucket", officialPageUrl: "https://bitbucket.org"},
    {name: "Webpack", level: "", icon: "webpack", officialPageUrl: "https://webpack.js.org"},
    {name: "Vite", level: "", icon: "vite", officialPageUrl: "https://vite.dev"},
    {name: "Figma", level: "", icon: "figma", officialPageUrl: "https://www.figma.com"},

    // Testing & CI
    {name: "Playwright", level: "", icon: "playwright", officialPageUrl: "https://playwright.dev"},
    {name: "Selenium", level: "", icon: "selenium", officialPageUrl: "https://www.selenium.dev"},
    {
        name: "REST API Testing",
        level: "",
        icon: "restApiTesting",
        officialPageUrl: "https://www.postman.com/api-platform/api-testing/"
    },
    {name: "GitLab CI", level: "", icon: "gitlabCi", officialPageUrl: "https://docs.gitlab.com/ci/"},

    // AI-Assisted Development
    {name: "Claude Code", level: "", icon: "claudeCode", officialPageUrl: "https://claude.com/product/claude-code"},
    {name: "Claude API", level: "", icon: "claudeApi", officialPageUrl: "https://platform.claude.com/docs"},
    {name: "Model Context Protocol (MCP)", level: "", icon: "mcp", officialPageUrl: "https://modelcontextprotocol.io"},
    {
        name: "Agent Skills",
        level: "",
        icon: "agentSkills",
        officialPageUrl: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
    },
    {name: "Subagents", level: "", icon: "subagents", officialPageUrl: "https://code.claude.com/docs/en/sub-agents"},
    {
        name: "RAG",
        level: "",
        icon: "rag",
        officialPageUrl: "https://aws.amazon.com/what-is/retrieval-augmented-generation/"
    },
];
