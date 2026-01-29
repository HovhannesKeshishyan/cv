import {Experience} from "@/types";

export const EXPERIENCES: Experience[] = [
    {
        id: "egs",
        company: "Energize Global Services Armenia",
        duration: {from: "2023-04-17", to: "Present"},
        role: "Frontend developer",
        technologies: ["Vue", "TypeScript", "SCSS", "LESS"],
        projects: [
            {
                id: 1,
                description: "Developing high-performance, accessible websites for fintech companies using Vue.js, TypeScript, and SCSS. Ensuring compliance with web accessibility standards through rigorous testing."
            }
        ]
    },
    {
        id: "willing",
        company: "Willing and Able LLC",
        duration: {from: "2020-12-09", to: "2023-04-14"},
        role: "Frontend developer",
        technologies: ["Vue", "VUEX", "Vue Router", "JavaScript", "TypeScript", "Angular", "SCSS", "Webpack"],
        projects: [
            {
                id: 1,
                description: "Training App – A SaaS platform where employees complete online training, take exams, and receive unique government-required certificates for their industry."
            },
            {
                id: 2,
                description: "Time Tracker – A SaaS application that tracks employees' working hours on projects. Employers can view detailed time logs, employees can add work comments, and invoices can be generated for payments."
            },
            {
                id: 3,
                description: "Document Sign App – A SaaS solution for online document signing. Users can negotiate terms before signing, and both parties receive a finalized, digitally signed document."
            }
        ]
    },
    {
        id: "compass_2",
        company: "Compass LLC",
        duration: {from: "2019-08-01", to: "2020-09-01"},
        role: "Frontend developer",
        technologies: ["HTML", "CSS", "JavaScript"],
        projects: [
            {
                id: 1,
                description: "Developed an interactive web platform using HTML, CSS, and JavaScript to help children improve their math skills. Designed engaging exercises and games with instant feedback to enhance learning."
            }
        ]
    },
    {
        id: "compass_1",
        company: "Compass LLC",
        duration: {from: "2017-08-01", to: "2019-08-01"},
        projects: [],
        technologies: ["Articulate Storyline"],
        role: "Articulate Storyline developer",
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
