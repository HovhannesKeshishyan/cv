import {Experience} from "@/types";

export const EXPERIENCES: Experience[] = [
    {
        id: "egs",
        company: "Energize Global Services Armenia",
        duration: {from: "2023-04-17", to: "Present"},
        role: "Senior Frontend Developer",
        technologies: ["Vue", "JavaScript", "TypeScript", "AEM", "SCSS", "LESS"],
        projects: [
            {
                id: 1,
                description: `Architect and develop high-performance fintech platforms using Vue.js, TypeScript,
                JavaScript, and Adobe Experience Manager (AEM), with a focus on scalable and reusable component architecture.`
            },
            {
                id: 2,
                description: `Implement WCAG 2.1 accessibility across complex applications, including ARIA patterns,
                keyboard navigation, focus management, and focus-visible behavior.`
            },
            {
                id: 3,
                description: `Own complex frontend architecture and UI logic across multiple product teams,
                establishing reusable patterns and maintainable component structures.`
            },
            {
                id: 4,
                description: `Design and develop responsive, cross-browser experiences while maintaining
                performance and architectural quality.`
            }
        ]
    },
    {
        id: "willing",
        company: "Willing and Able LLC",
        duration: {from: "2020-12-09", to: "2023-04-14"},
        role: "Frontend Developer",
        technologies: ["React", "Redux", "Vue", "VUEX", "Vue Router", "JavaScript", "TypeScript", "Angular", "SCSS", "Webpack"],
        projects: [
            {
                id: 1,
                description: `Architected and developed the frontend for a certification training platform,
                delivering complex exam flows, dynamic question rendering, and progress-tracking functionality.`
            },
            {
                id: 2,
                description: `Developed time-logging and invoice-generation workflows integrated with REST APIs,
                supporting employer reporting and administrative processes.`
            },
            {
                id: 3,
                description: `Developed a multi-party document-signing workflow with real-time negotiation
                state management and complex state synchronization.`
            },
            {
                id: 4,
                description: `Built reusable components and application patterns across multiple product features
                using React, Vue.js, and Angular.`
            }
        ]
    },
    {
        id: "compass_2",
        company: "Compass LLC",
        duration: {from: "2019-08-01", to: "2020-09-01"},
        role: "Frontend Developer",
        technologies: ["HTML", "CSS", "JavaScript"],
        projects: [
            {
                id: 1,
                description: `Owned the end-to-end frontend architecture of an interactive educational platform
                for students in grades 1-4, including UI architecture, interactive game logic, and cross-browser compatibility.`
            },
            {
                id: 2,
                description: `Built reusable UI components and animation systems shared across learning modules,
                improving consistency across the platform.`
            }
        ]
    },
    {
        id: "compass_1",
        company: "Compass LLC",
        duration: {from: "2017-08-01", to: "2019-08-01"},
        projects: [],
        technologies: ["Articulate Storyline"],
        role: "Articulate Storyline Developer",
        hide: true
    },
    {
        id: "stuyg",
        company: "Stuyg LLC",
        duration: {from: "2014-04-01", to: "2016-10-01"},
        role: "Accountant",
        projects: [],
        technologies: [],
        hide: true,
    },
    {
        id: "mag",
        company: "M.A.G. Shinanyut LLC",
        duration: {from: "2012-08-01", to: "2013-08-01"},
        role: "Accountant",
        projects: [],
        technologies: [],
        hide: true,
    },
];
