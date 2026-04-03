import {Experience} from "@/types";

export const EXPERIENCES: Experience[] = [
    {
        id: "egs",
        company: "Energize Global Services Armenia",
        duration: {from: "2023-04-17", to: "Present"},
        role: "Frontend developer",
        technologies: ["Vue", "JavaScript", "TypeScript", "AEM", "SCSS", "LESS"],
        projects: [
            {
                id: 1,
                description: `Architecting high-performance fintech platforms using Vue.js, JavaScript, TypeScript and AEM,
                 with a specific focus on performance optimization and scalable component design.`
            },
            {
                id: 2,
                description: `Implementation of advanced web accessibility (a11y) features, including ARIA management, 
                keyboard navigation protocols, and focus-visible styling to meet strict WCAG standards.`
            },
            {
                id: 3,
                description: `Engineering complex UI logic and maintained high-quality frontend architecture.`
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
                description: "Architected the frontend for a certification training platform, building exam flows and progress tracking."
            },
            {
                id: 2,
                description: `Built the time-logging and invoice generation UI, 
                integrating with backend APIs to support employer reporting workflows.`
            },
            {
                id: 3,
                description: "Developed a multi-party document signing flow with real-time negotiation state management."
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
                description: `Owned the full frontend of an educational math platform 
                for children in grades 1–4, including UI architecture, game 
                logic, and cross-browser compatibility.`
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
