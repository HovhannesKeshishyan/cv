import {createSlice} from "@reduxjs/toolkit";
import {
    IAuthorSliceState,
    IContacts,
    IExperience,
    ISocialMedia,
} from "./types";

const CONTACTS: IContacts = {
    email: "hovhanneskeshishyan@gmail.com",
    phone: "+37498088092",
    address: "Abovyan, Armenia",
    googleMapAddress: "https://goo.gl/maps/HK46jouRBXPehNY18"
};

const EXPERIENCES: IExperience[] = [
    {
        id: "egs",
        company: "Energize Global Services Armenia",
        year: {from: "2023-04-17", to: "Present"},
        role: "Frontend developer",
        technologies: ["Vue", "TypeScript", "SCSS", "LESS"],
        projects: [
            {
                id: 1,
                description: `Development of secure, high performance websites for fintech 
                companies with Vue.js, TypeScript and SCSS. All websites are testing 
                for web accessibility standards.`
            }
        ]
    },
    {
        id: "willing",
        company: "Willing and Able LLC",
        year: {from: "2020-12-09", to: "2023-04-14"},
        role: "Frontend developer",
        technologies: ["Vue", "VUEX", "Vue Router", "JavaScript", "TypeScript", "Angular", "SCSS", "Webpack"],
        projects: [
            {
                id: 1,
                description: `Training app, SaaS application where employees can watch online trainings,
                then pass exam and after successfully passing exam they get unique certificate
                witch is required by government for industry where they work.`
            },
            {
                id: 2,
                description: `Time tracker. SaaS application tracks the time when 
                employee works on project. Employer see detailed
                log of tracked time, employee comments on work
                and can create invoices for payment.`
            },
            {
                id: 3,
                description: `Document sign app. SaaS application let users
                to sign online documents. They can negotiate 
                about document and then sign document online.
                After sign both get online document with signature.`
            }
        ]
    },
    {
        id: "compass_2",
        company: "Compass LLC",
        year: {from: "2019-08-01", to: "2020-09-01"},
        role: "Frontend developer",
        technologies: ["HTML", "CSS", "JavaScript"],
        projects: [
            {
                id: 1,
                description: `Developed an interactive web-based platform using
                HTML, CSS, and JavaScript to help children test and
                improve their math skills. The platform includes 
                engaging exercises and games, providing instant
                feedback to enhance learning.`
            }
        ]
    },
    {
        id: "compass_1",
        company: "Compass LLC",
        year: {from: "2017-08-01", to: "2019-08-01"},
        projects: [],
        technologies: ["Articulate Storyline"],
        role: "Articulate Storyline developer",
    },
    {
        id: "stuyg",
        company: "Stuyg LLC",
        year: {from: "2014-04-01", to: "2016-10-01"},
        role: "Accountant",
        projects: [],
        technologies: [],
        hide: true,
    },
    {
        id: "mag",
        company: "M.A.G. Shinanyut LLC",
        year: {from: "2012-08-01", to: "2013-08-01"},
        role: "Accountant",
        projects: [],
        technologies: [],
        hide: true,
    },
];

const SOCIAL_MEDIA: ISocialMedia[] = [
    {
        name: "linkedin",
        href: "https://www.linkedin.com/in/hovhannes-keshishyan",
    },
    {
        name: "github",
        href: "https://github.com/Hovhannes1991",
    },
    {
        name: "facebook",
        href: "https://www.facebook.com/HovoKeshishyan",
    },
    {
        name: "twitter",
        href: "https://twitter.com/hovo1991",
    },
];

const initialState: IAuthorSliceState = {
    name: "Hovhannes",
    lastName: "Keshishyan",
    birth: new Date("02/17/1991").toString(),
    contacts: CONTACTS,
    experiences: EXPERIENCES,
    social: SOCIAL_MEDIA,
};

const authorSlice = createSlice({
    name: "authorSlice",
    initialState,
    reducers: {},
});

export default authorSlice.reducer;
